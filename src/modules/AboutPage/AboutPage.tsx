import {
  requestAdminTest,
  requestProtectedTest,
  requestTest,
} from "@/lib/api/test";
import { FC, useEffect } from "react";

const AboutPage: FC = () => {
  useEffect(() => {
    requestTest()
      .then((d) => console.log({ d }))
      .catch((err) => console.log({ err }));
  }, []);

  useEffect(() => {
    requestProtectedTest()
      .then((d) => console.log({ d }))
      .catch((err) => console.log({ err }));
  }, []);

  useEffect(() => {
    requestAdminTest()
      .then((d) => console.log({ d }))
      .catch((err) => console.log({ err }));
  }, []);

  console.log({ location });
  return <div>AboutPage</div>;
};

export default AboutPage;
