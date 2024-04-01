import { Controller, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import Button from "../../../../assets/Button";
import { ButtonVariantEnum } from "../../../../assets/Button/types";
import "../index.css";
import { InformationFormProps, PurchaseStateEnum } from "../../types";
import { usePurchaseStateStore } from "../../../../../zustand/store";
import { Dispatch, SetStateAction } from "react";

function TelephoneInput({
  setName,
}: {
  setName: Dispatch<SetStateAction<string | undefined>>;
}) {
  const { setPurchaseState } = usePurchaseStateStore((state) => state);

  const {
    handleSubmit,
    control,
    formState: { isValid, isValidating, errors },
  } = useForm({
    mode: "onBlur",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    const dataToSend = data as InformationFormProps;
    setName(dataToSend.name.split(" ")[0]);
    setPurchaseState(PurchaseStateEnum?.PURCHASE_SUCCESSFULLY);
  };

  const handleResetClick = () => {
    setPurchaseState(PurchaseStateEnum.MOVIE_FORM);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="inputWrapper">
        <label htmlFor="name" className="inputLabel">
          Nombre completo
        </label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: "Este campo es requerido",
            minLength: {
              value: 4,
              message: "El nombre debe tener al menos 4 caracteres",
            },
            validate: {
              noLeadingTrailingSpaces: (value) =>
                (!value.startsWith(" ") && !value.endsWith(" ")) ||
                "El nombre no puede empezar ni terminar con espacios",
            },
          }}
          render={({ field }) => <input className="input" {...field}></input>}
        />
        {errors.name && (
          <p className="errorMessage">{errors.name.message as string}</p>
        )}
      </div>
      <div className="inputWrapper">
        <label htmlFor="email" className="inputLabel">
          E-mail
        </label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Este campo es requerido",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'El formato de email debe ser "ejemplomail@gmail.com"',
            },
          }}
          render={({ field }) => <input className="input" {...field}></input>}
        />
        {errors.email && (
          <p className="errorMessage">{errors?.email.message as string}</p>
        )}
      </div>
      <div className="inputWrapper">
        <label htmlFor="phone" className="inputLabel">
          Teléfono
        </label>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{
            required: "Este campo es requerido",
            minLength: {
              value: 11,
              message: "El número telefónico debe tener al menos 9 caracteres",
            },
          }}
          render={({ field }) => (
            <InputMask
              className="input"
              mask="999-999-999"
              maskChar={null}
              {...field}
            ></InputMask>
          )}
        />
        {errors.phone && (
          <p className="errorMessage">{errors?.phone.message as string}</p>
        )}
      </div>
      <div className="formButtonsContainer">
        <Button
          type="submit"
          variant={ButtonVariantEnum.GREEN}
          disabled={isValidating || !isValid}
        >
          Finalizar
        </Button>
        <Button
          onClick={handleResetClick}
          type="button"
          variant={ButtonVariantEnum.BORDER_NONE}
        >
          Volver
        </Button>
      </div>
    </form>
  );
}

export default TelephoneInput;
