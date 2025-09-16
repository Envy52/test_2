import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const FormInput = ({ id, label, value, onChange, placeholder, type = "text", required = false, error = false }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`block w-full px-4 py-3 bg-slate-900/70 border ${error ? "border-red-500" : "border-slate-600"} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 sm:text-sm transition`}
      />
    </div>
  );
};

const FormTextarea = ({ id, label, value, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows="4"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full px-4 py-3 bg-slate-900/70 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 sm:text-sm transition"
      ></textarea>
    </div>
  );
};

export default function ContactForm() {
  const { t } = useTranslation();

  const [category, setCategory] = useState("clients");
  const [formData, setFormData] = useState({
    name: "",
    city: t("contact.cityDefault"), 
    phone: "",
    comment: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "phone") setPhoneError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phone.trim().length < 9) {
      setPhoneError(true);
      return;
    }
    console.log("Form data submitted:", { ...formData, category });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", city: t("contact.cityDefault"), phone: "", comment: "" });
    }, 5000);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-lg p-8 md:p-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t("contact.title")}</h2>
            <p className="mt-2 text-2xl md:text-3xl font-semibold text-gray-200 mb-6">{t("contact.subtitle")}</p>
            <p className="text-gray-400 mb-4">{t("contact.selectCategory")}</p>

            <div className="flex items-center space-x-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value="clients"
                  checked={category === "clients"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="sr-only peer"
                />
                <div className="w-6 h-6 border-2 border-slate-500 rounded-full peer-checked:bg-cyan-400 peer-checked:border-cyan-400 flex items-center justify-center transition">
                  <div className="w-3 h-3 bg-slate-950 rounded-full"></div>
                </div>
                <span className="ml-3 text-gray-200">{t("contact.forClients")}</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value="partners"
                  checked={category === "partners"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="sr-only peer"
                />
                <div className="w-6 h-6 border-2 border-slate-500 rounded-full peer-checked:bg-cyan-400 peer-checked:border-cyan-400 flex items-center justify-center transition">
                  <div className="w-3 h-3 bg-slate-950 rounded-full"></div>
                </div>
                <span className="ml-3 text-gray-200">{t("contact.forPartners")}</span>
              </label>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <FormInput
                id="name"
                label={t("contact.name")}
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t("contact.namePlaceholder")}
                required
              />
              <FormInput
                id="city"
                label={t("contact.city")}
                value={formData.city}
                onChange={handleInputChange}
                placeholder={t("contact.cityPlaceholder")}
              />

              <FormInput
                id="phone"
                label={t("contact.phone")}
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t("contact.phonePlaceholder")}
              />

              <FormTextarea
                id="comment"
                label={t("contact.comment")}
                value={formData.comment}
                onChange={handleInputChange}
                placeholder={t("contact.commentPlaceholder")}
              />

              {isSubmitted && <p className="text-green-400 font-medium">{t("contact.successMessage")}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 text-lg font-semibold rounded-full text-white 
                   bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 
                   shadow-[0_0_20px_rgba(56,189,248,0.5)] 
                   hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] 
                   transition-all duration-300"
              >
                {t("contact.sendButton")}
                <ArrowRight className="w-5 h-5 ml-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
