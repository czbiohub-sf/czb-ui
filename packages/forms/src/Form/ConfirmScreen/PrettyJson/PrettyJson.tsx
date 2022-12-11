import { Typography, Box } from "@mui/material";
import { RJSFSchema } from "@rjsf/utils";
import React from "react";

interface PrettyJsonProps {
  formData: any[];
  schema: RJSFSchema[];
}

// Modification of https://stackoverflow.com/a/14810722/10013136
// Long story short, returns array instead of object in the original code
// k is key, v is value, and j is the index number (changed from i to not
// interfere with formData.map)
const objectMap = (
  obj: Record<string, any>,
  fn: (v: any, k: string, i: number) => any
) => Object.entries(obj).map(([k, v], j) => fn(v, k, j));

const LayoutJson = (prop: string | string[] | Record<string, any>) => {
  if (typeof prop == "string") {
    return <div>{prop}</div>;
  }

  if (Array.isArray(prop)) {
    return (
      <ol>
        {prop.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    );
  }

  if (typeof prop == "object") {
    return (
      <ul>
        {objectMap(prop, (v, k, j) => {
          return (
            <Box mb={5} key={j}>
              <Typography fontWeight="bold">{k}</Typography>
              <Typography>{LayoutJson(v)}</Typography>
            </Box>
          );
        })}
      </ul>
    );
  }

  // If the type is not coded here,
  // just fallback to a JSON stringify
  return <div>{JSON.stringify(prop)}</div>;
};

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
          <div key={i}>
            <Typography variant="h2" my={4}>
              {schemaOnCurrentPage.title}
            </Typography>
            {objectMap(step, (v, k, j) => {
              const labelToShow = k || schemaOnCurrentPage.properties?.title;
              return (
                <Box mb={5} key={j}>
                  <Typography fontWeight="bold">{labelToShow}</Typography>
                  {LayoutJson(v)}
                </Box>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
