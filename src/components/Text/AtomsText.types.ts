export interface IAtomsTextProps {
  children: React.ReactNode;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: "normal" | "bold" | "lighter" | "bolder" | number;
  color?: string;
  lineHeight?: string;
  textAlign?: "left" | "center" | "right" | "justify";
}
