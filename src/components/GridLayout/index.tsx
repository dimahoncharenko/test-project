import { Grid } from "./styled";

type Props = {
    children: React.ReactNode;
}
export const GridLayout = ({ children }: Props) => {
  return <Grid>
    {children}
  </Grid>;
};