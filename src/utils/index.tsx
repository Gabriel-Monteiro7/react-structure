import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Tooltip } from "@material-ui/core";

export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

export const formatDate = (date: any) => {
  return format(new Date(date), "dd'/'MM'/'yyyy", {
    locale: ptBR,
  });
};
export const formatDateDefault = (date: any) => {
  return format(new Date(date), "MMM dd', 'yyyy");
};

export const formatText = (text: any, Component: any, limit = 25) => {
  return text.length > limit ? (
    <Tooltip title={text} aria-label={text}>
      <Component> {text.substring(0, limit)}... </Component>
    </Tooltip>
  ) : (
    <Component>{text}</Component>
  );
};
