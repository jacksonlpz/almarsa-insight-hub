import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/hooks/useLanguage";
import { Language, languages, supportedLanguages } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full text-sm font-semibold"
          aria-label="Switch Language"
        >
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, label]) => {
          const typedCode = code as Language;
          const isSupported = supportedLanguages.includes(typedCode);

          return (
            <DropdownMenuItem
              key={code}
              className={language === code ? "bg-accent" : ""}
              onClick={() => {
                if (isSupported) {
                  setLanguage(typedCode);
                }
              }}
              disabled={!isSupported}
            >
              <span className="flex flex-col">
                <span>{label}</span>
                {!isSupported && (
                  <span className="text-label-sm text-muted-foreground">Coming soon</span>
                )}
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}