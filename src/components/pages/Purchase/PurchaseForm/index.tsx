import { useForm, Controller } from "react-hook-form";
import { PurchaseFormProps } from "../types";
import Select from "../../../assets/Select";
import { useMoviesStore } from "../../../../zustand/store";
import { datesArr } from "../../../../helpers/date";
import { seatsArr } from "../../../../helpers/seats";
import { compareAsc, parse } from "date-fns";
import { Dispatch, SetStateAction, useEffect } from "react";
import "./index.css";
import Button from "../../../assets/Button";
import { ButtonVariantEnum } from "../../../assets/Button/types";

function PurchaseForm({
  selectedMovie,
  setSelectedMovie,
}: {
  selectedMovie: PurchaseFormProps;
  setSelectedMovie: Dispatch<SetStateAction<PurchaseFormProps>>;
}) {
  const moviesData = useMoviesStore((state) => state.moviesData);

  const formattedDatesArr = datesArr.sort((a, b) =>
    compareAsc(
      parse(a, "dd/MM/yyyy HH:mm", new Date()),
      parse(b, "dd/MM/yyyy HH:mm", new Date())
    )
  );

  const formatSeatArr = seatsArr.map(
    (seat) => `Fila ${seat.row} asiento ${seat.seat}`
  );

  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<PurchaseFormProps>({
    defaultValues: {
      title: selectedMovie?.title || "",
      date:
        selectedMovie?.date ||
        formattedDatesArr[Math.floor(Math.random() * formattedDatesArr.length)],
      place:
        selectedMovie?.place ||
        formatSeatArr[Math.floor(Math.random() * seatsArr.length)],
    },
  });

  const onSubmit = (data: PurchaseFormProps) => {
    setSelectedMovie(data);
  };

  const handleResetClick = () => {
    reset({
      title: moviesData[Math.floor(Math.random() * moviesData.length)]?.title,
      date: formattedDatesArr[
        Math.floor(Math.random() * formattedDatesArr.length)
      ],
      place: formatSeatArr[Math.floor(Math.random() * seatsArr.length)],
    });
  };

  useEffect(() => {
    if (moviesData?.length) {
      setValue(
        "title",
        moviesData[Math.floor(Math.random() * moviesData.length)]?.title
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesData.length]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="purchaseForm">
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            options={moviesData?.map((movie) => movie.title)}
            label="Seleccione película"
            name="title"
          />
        )}
      />
      {errors.title && <p>Este campo es requerido</p>}
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            options={formattedDatesArr}
            label="Seleccione función"
            name="date"
          />
        )}
      />
      {errors.date && <p>Este campo es requerido</p>}
      <Controller
        name="place"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            options={formatSeatArr}
            label="Seleccione asiento"
            name="place"
          />
        )}
      />
      {errors.date && <p>Este campo es requerido</p>}
      <div className="formButtonsContainer">
        <Button type="submit">Continuar</Button>
        <Button
          onClick={handleResetClick}
          type="button"
          variant={ButtonVariantEnum.BORDER_NONE}
        >
          Reiniciar
        </Button>
      </div>
    </form>
  );
}

export default PurchaseForm;