import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RJSFSchema } from "@rjsf/utils";
import React from "react";

interface PrettyJsonProps {
  formData: any[];
  schema: RJSFSchema[];
}

// Modification of https://stackoverflow.com/a/14810722/10013136
// Long story short, returns array instead of object in the original code
// k is key, v is value, and i is the index number
const objectMap = (
  obj: Record<string, any>,
  fn: (v: any, k: string, i: number) => any
) => Object.entries(obj).map(([k, v], i) => fn(v, k, i));

// Actual schema is needed so we can get the real label names
// and also the form's page titles
export default function PrettyJson({ formData, schema }: PrettyJsonProps) {
  // For multi-step form
  return (
    <div>
      {formData.map((step: any, i) => {
        // "i" is the page/step of the form
        const schemaOnCurrentPage = schema[i];
        return (
          <>
            <Typography variant="h2" my={4}>
              {schemaOnCurrentPage.title}
            </Typography>
            {objectMap(step, (v, k) => {
              const labelToShow = k || schemaOnCurrentPage.properties?.title;
              return (
                <Box mb={5}>
                  <Typography fontWeight="bold">{labelToShow}</Typography>
                  <Typography>{v}</Typography>
                </Box>
              );
            })}
          </>
        );
      })}
    </div>
  );
}
