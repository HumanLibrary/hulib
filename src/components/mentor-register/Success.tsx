import { Col } from "@/layouts/Flex";
import { CheckCircle } from "@phosphor-icons/react";
import React from "react";
import Button from "../button/Button";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';

const Success = () => {
  const t = useTranslations("MentorRegister");
  const router = useRouter();
  const handleBackToHome = () => {
    router.push("/");
    router.refresh();
  };
  return (
    <Col
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width={384}
      gap={20}
    >
      <CheckCircle className="size-[72px] text-[#46D51B]" />
      <p className="text-sm font-normal leading-5">
        {t("success_submit_form")}
      </p>
      <Button className="mt-5 w-full" onClick={handleBackToHome}>
        {t("back_to_home")}
      </Button>
    </Col>
  );
};

export default Success;
