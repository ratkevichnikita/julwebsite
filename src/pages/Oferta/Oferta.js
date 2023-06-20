import React from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";

const Oferta = () => {

  const navigate = useNavigate();

  return (
    <div className={"wrapper"}>
      <div className="oferta">
        <button className={"oferta-back"} onClick={() => navigate(-1)}>
          <svg width="45" height="6" viewBox="0 0 45 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3L5 5.88675V0.113249L0 3ZM45 2.5L4.5 2.5V3.5L45 3.5V2.5Z" fill="#1C1C1C"/>
          </svg>
          Вернуться назад
        </button>
        <p className="oferta-title">
          Договор-оферта
        </p>
        <p>
          Настоящая оферта представляет собой официальное предложение Раткевич Юлии Алексеевны, именуемой в дальнейшем
          Продавец и выражает намерение заключить Договор купли-продажи информационных продуктов (далее по тексту
          «Инфопродукт») с любым лицом, именуемым в дальнейшем Покупатель, которым приняты условия настоящей Оферты.

        </p>
        <p>
          Данная оферта размещена на постоянной основе в сети Интернет и доступна по адресу: https://momjulee.ru/oferta

        </p>
        <p>
          1. Понятия, используемые в данной Оферте

        </p>
        <p>
          1.1. В настоящей Оферте нижеприведенные понятия и термины используются в следующем значении:

        </p>
        <p>
          1.1.1. Интернет-сайт – информация, размещаемая Продавцом в сети Интернет по адресам: https://momjulee.ru/

        </p>
        <p>
          1.1.2. Инфопродукт – он же Гайд, специальная форма представления информации Покупателю, направленная на
          приобретение обучающимся лицом дополнительных знаний и навыков в определенной сфере деятельности.

        </p>
        <p>
          1.2. В Оферте могут быть использованы понятия, не определенные в пункте 1.1. настоящей Оферты. В этих случаях
          толкование понятий производится в соответствии с текстом и смыслом данной Оферты. В случае отсутствия
          однозначного толкования понятия в тексте Оферты, следует руководствоваться, во - первых , толкованием понятий,
          используемых на Интернет-сайте Продавца, во - вторых, гражданским законодательством Российской Федерации.

        </p>
        <p>
          2. Предмет настоящей Оферты

        </p>
        <p>
          2.1. Предметом настоящей Оферты является продажа Продавцом Покупателю инфопродуктов в электронном виде (видео,
          аудио, текстовом и графическом формате) и/или/либо размещенных на Интернет-сайте Продавца.

        </p>
        <p>
          3. Обязательства Сторон

        </p>
        <p>
          3.1. Продавец обязуется:

        </p>
        <p>
          3.1.1. Обеспечить Покупателю возможность доступа к приобретенному им инфопродукту, в частности передать
          соответствующую видео, аудио, текстовую или графическую запись инфопродукта в электронном виде (путем
          предоставления доступа к просмотру и/или скачиванию цифровой версии инфопродукта), либо создать условия для
          просмотра Покупателем соответствующей онлайн трансляции инфопродукта или совершить иные действия, необходимые
          для доступа Покупателя к соответствующему инфопродукту;

        </p>
        <p>
          3.1.2. Предоставить Покупателю в течение 2 (двух) рабочих дней с момента поступления денежных средств на счет
          Продавца, доступ к цифровой версии инфопродукта в бессрочное пользование;

        </p>
        <p>
          3.1.3. Принять от Покупателя оплату за приобретаемый им инфопродукт;

        </p>
        <p>
          3.1.4. Вернуть Продавцу денежные средства в случае, указанном в п . 7.3. настоящей Оферты;

        </p>
        <p>
          3.1.5. Выполнять иные обязанности, предусмотренные настоящей Офертой.

        </p>
        <p>
          3.2. Покупатель обязуется:

        </p>
        <p>
          3.2.1. При покупке и оформлении заказа инфопродукта указать достоверные и полные данные о себе;

        </p>
        <p>
          3.2. 2 . Уплатить Продавцу полную стоимость приобретаемого им инфопродукта любым удобным способом;

        </p>
        <p>
          3.2. 3 . Не предъявлять к Продавцу претензий, требований, исков и жалоб в случае, установленном п. 7.1 данной
          Оферты;

        </p>
        <p>
          3.2. 4. Выполнять иные обязанности, предусмотренные настоящей Офертой.

        </p>
        <p>
          4. Условия оплаты инфопродукта

        </p>
        <p>
          4.1. Покупатель обязуется уплатить Продавцу полную стоимость инфопродукта, указанную наинтернет - сайте
          Продавца.

        </p>
        <p>
          4.2. Оплата стоимости соответствующего инфопродукта производится Покупателем путем полной предварительной оплаты
          такой стоимости.

        </p>
        <p>
          4.3. Порядок перечисления денежных средств, а также иные условия оплаты стоимости инфопродукта,приобретаемого
          Покупателем, определяются на Интернет-сайте Продавца. Оплата инфопродуктов осуществляется электронными деньгами,
          банковскими и прочими переводами.

        </p>
        <p>
          5. Акцепт настоящей Оферты

        </p>
        <p>
          5.1. Акцептом настоящей Оферты признается оплата Покупателем стоимости соответствующего инфопродукта и означает
          полное и безоговорочное принятие Покупателем условий настоящей Оферты.

        </p>
        <p>
          5.2. Настоящая Оферта признается акцептованной с момента зачисления денежных средств на счет Продавца.

        </p>
        <p>
          5.3. С момента зачисления денежных средств на счет Продавца договор купли-продажи инфопродукта считается
          заключенным.

        </p>
        <p>
          6. Авторское право

        </p>
        <p>
          6.1. Все авторские права на инфопродукт, приобретаемый Покупателем, в частности исключительное право на него,
          принадлежит непосредственно Продавцу.

        </p>
        <p>
          6.2. Покупатель не вправе использовать приобретенный у Продавца инфопродукт под собственным именем, под именем
          любого другого лица или под вымышленным именем, а также нарушать иные авторские права Продавца.

        </p>
        <p>
          6.3. Покупатель инфопродукта вправе использовать его исключительно в личных целях. Купля-продажа приобретенного
          Покупателем инфопродукта другому лицу, а также иная форма его реализации,не допускается.

        </p>
        <p>
          6.4. Покупатель обязуется не размещать и не распространять приобретенный им инфопродукт в сети Интернет, а также
          в любых иных источниках, к которым имеется доступ у третьих лиц.

        </p>
        <p>
          7. Ответственность Сторон

        </p>
        <p>
          7.1. Продавец не несет ответственности за достижение практических результатов, связанных с применением
          информации, содержащейся в инфопродукте, любые рекомендации, содержащиеся в инфопродукте, осуществляются
          Покупателем на свое личное усмотрение.

        </p>
        <p>
          7.2. Возврат средств за инфопродукт Покупателю в случае, если использование навыков и знаний, полученных в ходе
          изучения инфопродукта, не привело к положительному результату не предусмотрен.

        </p>
        <p>
          7.3. После получения Покупателем доступа к инфопродукту (ссылка на скачивание), денежные средства Продавцом не
          возвращаются.

        </p>
        <p>
          7.4. За нарушение положений, предусмотренных пунктами 6.2., 6.3., 6.4. Покупатель обязуется уплатить Продавцу
          неустойку в размере стократной стоимости соответствующего инфопродукта.

        </p>
        <p>
          8. Срок действия и изменение условий Оферты

        </p>
        <p>
          8.1. Настоящая Оферта вступает в силу с момента ее размещения на Интернет-сайте Продавца и действует до полного
          исполнения сторонами своих обязательств.

        </p>
        <p>
          8.2. Продавец вправе в любое время внести изменения в условия Оферты. Покупатель подтверждает свое согласие с
          изменениями условий данной оферты при повторных покупках инфопродуктов Продавца.

        </p>
        <p>
          9. Порядок разрешения споров

        </p>
        <p>
          9.1. Стороны установили претензионный досудебный порядок урегулирования разногласий и споров. Срок для ответа на
          предъявленную претензию составляет 10 (десять) рабочих дней с момента направления претензии.

        </p>
        <p>
          9.2. В случае недостижения договоренности по спорным вопросам спор, вытекающий из Договоракупли-продажи
          инфопродукта, подлежит рассмотрению в судебном порядке в соответствии с действующим законодательством Российской
          Федерации по месту нахождения Продавца.

        </p>
        <p>
          10. Прочие условияи положения

        </p>
        <p>
          10.1. Моменты и вопросы, не предусмотренные и не разрешенные настоящей Офертой, регулируются и разрешаются в
          соответствие с положениями действующего законодательства Российской Федерации.

        </p>
        <p>
          10.2. Стороны подтверждают, что Договор купли-продажи инфопродуктов представляет собой полную договоренность
          между Продавцом и Покупателем.

        </p>
        <p>
          10.3. В случае утраты силы какого-либо условия настоящей Оферты в соответствии с действующимзаконодательством,
          остальные положения остаются в силе в неизменном виде, а недействующее условие подлежит уточнению или замене на
          соответствующее требованиям действующего законодательства.

        </p>
        <p>
          11. Реквизиты Продавца

        </p>
        <p>
          Раткевич Юлия Алексеевна
          <span>
          ИНН: 7710140679
        </span>
          <span>Связь: yulia.ratkevich@mail.ru</span>
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Oferta;