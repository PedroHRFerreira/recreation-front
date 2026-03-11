import { TextAlign, FontWeight } from "@/enum/text.enum";

export interface IAtomsTextProps {
  children: React.ReactNode;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: `${FontWeight}` | FontWeight | number;
  color?: string;
  lineHeight?: string;
  textAlign?: `${TextAlign}` | TextAlign;
}
