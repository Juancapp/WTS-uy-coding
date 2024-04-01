/* eslint-disable react-hooks/exhaustive-deps */
import { compareAsc, parse } from "date-fns";
import { datesArr } from "../../../../../helpers/date";
import {
  useMoviesStore,
  usePurchaseStateStore,
} from "../../../../../zustand/store";
import { seatsArr } from "../../../../../helpers/seats";
import { PurchaseFormProps, PurchaseStateEnum } from "../../types";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import Select from "../../../../assets/Select";
import Button from "../../../../assets/Button";
import { ButtonVariantEnum } from "../../../../assets/Button/types";
import "../index.css";

function PurchaseForm() {
  const { moviesData, selectedMovie, setSelectedMovie } = useMoviesStore(
    (state) => state
  );
  const { setPurchaseState } = usePurchaseStateStore((state) => state);

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
    setPurchaseState(PurchaseStateEnum.PERSONAL_INFO_FORM);
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

  useEffect(() => {
    if (selectedMovie.title.length) {
      setValue("title", selectedMovie.title);
    }
  }, [selectedMovie.title]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
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
