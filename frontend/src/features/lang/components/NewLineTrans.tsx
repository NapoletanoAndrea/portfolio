import { Trans, type TransProps } from "react-i18next";

interface NewLineTransProps extends Omit<TransProps<any>, "ns"> {
  ns: string | string[];
}

export default function NewLineTrans({
  components,
  ns,
  ...props
}: NewLineTransProps) {
  return (
    <Trans
      ns={ns as any}
      components={{
        br: <br />,
        tab: <span className="pl-4" />,
        ...components,
      }}
      {...props}
    />
  );
}
