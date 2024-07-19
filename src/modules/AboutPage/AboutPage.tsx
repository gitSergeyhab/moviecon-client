import { requestRandomQuestionList$ } from "@/lib/api/test";
import { FC, useEffect } from "react";

const AboutPage: FC = () => {
  useEffect(() => {
    requestRandomQuestionList$()
      .then((d) => console.info({ d }))
      .catch((err) => console.error({ err }));
  }, []);

  return <div>AboutPage</div>;
};

export default AboutPage;
