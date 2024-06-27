import React, { Suspense } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Fallback from "../components/Fallback/Fallback";
// import Stoplight from "../components/Stoplight/Stoplight"

const LazyStoplight = React.lazy(() => import("../components/Stoplight/Stoplight"));

export default function Api() {
  return (
    <Layout
      title="API Documentation"
      description="API Reference Documentation."
      noFooter
      wrapperClassName="api-reference"
    >
      <BrowserOnly>
        {() => (
          <Suspense fallback={Fallback}>
            <LazyStoplight apiDescriptionUrl="https://api.apis.guru/v2/specs/github.com/1.1.4/openapi.yaml" />
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
}
