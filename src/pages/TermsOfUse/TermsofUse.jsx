import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import styles from "./TermsofUse.module.css"

export let TermsofUse = () => {
    useScrollToHash();

    return (
        <>
            <Breadcrumbs />
            <div id='target' className="flex justify-center items-center px-[14px]">
                <div className="flex flex-col justify-center items-center
                    px-[14px]
                    lg:max-w-[710px] lg:px-[14px]"
                >
                    <h1 className="mb-[20px] mt-[24px] text-center text-[24px] text-nowrap font-semibold">Условия пользования</h1>
                    <ol className="flex flex-col text-[16px] font-semibold">
                        <li>1. Общие положения</li>
                        <ul className="flex flex-col font-normal">
                            <li>1.1. Обработка персональных данных осуществляется в соответствии с ФЗ"О персональных данных" № 152-ФЗот 27.07.2006.</li>
                            <li>1.2. Пользователь, передавая свои персональные данные, даёт согласие на их обработку.</li>
                        </ul>
                        <li>2. Персональные данные, собираемые на сайте:</li>
                        <ul className="flex flex-col font-normal">
                            <li>3.1. Обработка заказов и доставка товаров.</li>
                            <li>3.2. Обратная связь с пользователем.</li>
                            <li>3.3. Рассылка акций, новостей и предложений (при согласии пользователя).</li>
                            <li>3.4. Поведенческая аналитика и улучшение качества сервиса.</li>
                            <li>3.5. Ретаргетинг и показ персонализированной рекламы.</li>
                        </ul>
                        <li>3. Цели обработки персональных данных:</li>
                        <ul className="flex flex-col font-normal">
                            <li>4.1. CRM Retail CRM для обработки заказов.</li>
                            <li>4.2. Сервис Unisender для рассылки.</li>
                            <li>4.3. Службы доставки: СДЭК, Почта России.</li>
                            <li>4.4. Рекламные платформы: Яндекс, SberAds.</li>
                        </ul>
                        <li>4. Передача данных третьим лицам:</li>
                        <ul className="flex flex-col font-normal">
                            <li>5.1. Данные хранятся на хостинге AdminVPS и вCRM.</li>
                            <li>5.2. Срок хранения — 1 год после выполнения заказа или до отзыва согласия.</li>
                            <li>5.3. Используются технические и организационные меры для защиты данных.</li>
                        </ul>
                        <li>5. Хранение и защита данных:</li>
                        <ul className="flex flex-col font-normal">
                            <li>5.1. Данные хранятся на хостинге AdminVPS и вCRM.</li>
                            <li>5.2. Срок хранения — 1 год после выполнения заказа или до отзыва согласия.</li>
                            <li>5.3. Используются технические и организационные меры для защиты данных.</li>
                        </ul>

                        <li>6. Права пользователя:</li>
                        <ul className="flex flex-col font-normal">
                            <li>6.1. Пользователь имеет право отозвать согласие на обработку данных.</li>
                            <li>6.2. Для этого можно:</li>
                            <ul className=" pl-5 list-disc font-normal">
                                <li>отправить письмо на Email: center.tkani@yandex.ru;</li>
                                <li>воспользоваться формой на сайте;</li>
                                <li>позвонить по телефону: +7 (928) 716-66-26.</li>
                            </ul>
                        </ul>

                        <li>7. Заключительные положения:</li>
                        <ul className="flex flex-col font-normal">
                            <li>7.1. Политика может быть изменена. Актуальнаяверсия всегда доступна на сайте.</li>
                            <li>Дата последнего обновления: май 2025 года</li>
                        </ul>
                    </ol>
                </div>
            </div>
        </>
    );
}