"use client";

import { actionFunction } from "@/utils/types";
import { useActionState, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const initialMessage = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  // const [state, formAction] = useFormState(action, initialMessage);
  const [state, formAction] = useActionState(action, initialMessage); //react 19

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
