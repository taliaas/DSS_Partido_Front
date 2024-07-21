import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import en from 'src/i18n/en.json';
import es from 'src/i18n/es.json';

const messages = {
  en,
  es,
};

const i18n = createI18n({
  locale: "es",
  fallbackLocale: "es",
  messages,
});

export default boot(({ app }) => {
  app.use(i18n);
});

export { i18n };
