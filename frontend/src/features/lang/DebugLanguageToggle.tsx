import { useTranslation } from "react-i18next";
import { IMAGES_PATH } from "../../constants";
import Button from "../../components/ui/Button/Button";

export default function DebugLanguageToggle() {
  const { i18n } = useTranslation();

  const svgStyle = {
    width: "1.25em",
    height: "1.25em",
    margin: "auto 0",
  };

  return (
    <div style={{ display: "flex", gap: ".5rem" }}>
      <Button onClick={() => i18n.changeLanguage("en")}>
        <img
          style={svgStyle}
          src={IMAGES_PATH + "flags/uk.svg"}
          alt="UK Flag"
        />
        EN
      </Button>
      <Button onClick={() => i18n.changeLanguage("it")}>
        <img
          style={svgStyle}
          src={IMAGES_PATH + "flags/italy.svg"}
          alt="Italian Flag"
        />
        IT
      </Button>
      <Button onClick={() => i18n.changeLanguage(String(navigator.language))}>
        🌐 Browser
      </Button>
    </div>
  );
}
