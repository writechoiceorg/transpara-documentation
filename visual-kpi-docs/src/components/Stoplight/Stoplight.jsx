import React from "react";
import { API } from "@stoplight/elements";
import styles from "./Stoplight.module.scss";

function Stoplight({ apiDescriptionUrl }) {
  return (
      <div className={styles.stoplight}>
        <API 
          apiDescriptionUrl={apiDescriptionUrl} 
          router="hash" 
          hideSchemas
        />
      </div>
  );
}

export default Stoplight;
