import { useScrollToHash } from "../../hooks/useScrollToHash";
import styles from "./PrivacyPolicy.module.css";

export const PrivacyPolicy = () => {
  useScrollToHash();
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-center text-[24px] text-nowrap font-semibold mb-[30px]">Политика конфиденциальности</h1>
        <div id="target" className="mx-[14px] flex flex-col gap-[20px] xl:w-[742px]">
          <ol className="flex flex-col text-[16px] font-semibold">
            <div className="">
              <li>1. Общие положения</li>
              <ul className="flex flex-col font-normal">
                <li>1.1 Обработка персональных данных осуществляется в соответствии с ФЗ"О персональных данных" № 152-ФЗот 27.07.2006.</li>
                <li>1.2 Пользователь, передавая свои персональные данные, даёт согласие на их обработку.</li>
              </ul>
            </div>
            <div className="">
              <li>2. Персональные данные, собираемые на сайте:</li>
              <ul className="flex flex-col font-normal">
                <li>2.1. Имя, номер телефона, адрес электронной почты, адрес доставки, иные сведения, вводимые пользователем при
                  оформлении заказа, подписке, отправке формы обратной связи, в онлайн-чате.</li>
              </ul>
            </div>
            <div className="">
              <li>3. Цели обработки персональных данных:</li>
              <ul className="flex flex-col font-normal">
                <li>3.1. Обработка заказов и доставка товаров.</li>
                <li>3.2. Обратная связь с пользователем.</li>
                <li>3.3. Рассылка акций, новостей и предложений (при согласии пользователя).</li>
                <li>3.4. Поведенческая аналитика и улучшение качества сервиса.</li>
                <li>3.5. Ретаргетинг и показ персонализированной рекламы.</li>
              </ul>
            </div>
            <div className="">
              <li>4. Передача данных третьим лицам:</li>
              <ul className="flex flex-col font-normal">
                <li>4.1. CRM Retail CRM для обработки заказов.</li>
                <li>4.2. Сервис Unisender для рассылки.</li>
                <li>4.3. Службы доставки: СДЭК, Почта России.</li>
                <li>4.4. Рекламные платформы: Яндекс, SberAds.</li>
              </ul>
            </div>

            <div className="">
              <li>5. Хранение и защита данных:</li>
              <ul className="flex flex-col font-normal">
                <li>5.1. Данные хранятся на хостинге AdminVPS и вCRM.</li>
                <li>5.2. Срок хранения — 1 год после выполнения заказа или до отзыва согласия.</li>
                <li>5.3. Используются технические и организационные меры для защиты данных.</li>
              </ul>
            </div>

            <div className="">
              <ul className="flex flex-col font-normal">
                <li>6.1. Пользователь имеет право отозвать согласие на обработку данных.</li>
                <li>6.2. Для этого можно:</li>
                <ul className=" pl-5 list-disc font-normal">
                  <li>отправить письмо на Email: center.tkani@yandex.ru;</li>
                  <li>воспользоваться формой на сайте;</li>
                  <li>позвонить по телефону: +7 (928) 716-66-26.</li>
                </ul>
              </ul>
            </div>
            <li>6. Права пользователя:</li>
            <div className="">
              <li>7. Заключительные положения:</li>
              <ul className="flex flex-col font-normal">
                <li>7.1. Политика может быть изменена. Актуальнаяверсия всегда доступна на сайте.</li>
                <li>Дата последнего обновления: май 2025 года.</li>
              </ul>
            </div>

          </ol>

        </div>
      </div>
    </>
  );
};
