import React, { useState } from "react";
//STYLE
import styles from "./RobotModal.module.css";
import * as ReactBootStrap from "react-bootstrap";
//Components
import CurrencyInput from "react-currency-input-field";
import RobotPostModal from "./RobotPostModal";
//Interfaces
import ICreateRobot from "../interfaces/ICreateRobot";
type Props = {
  modalSetter: React.Dispatch<React.SetStateAction<boolean>>;
};

const RobotModal = (props: Props) => {
  const [productName, setProductName] = useState<string>("");
  const [capitalValue, setCapitalValue] = useState<number>(0);
  const [strategy, setStrategy] = useState<string>("");
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isDivDisabled, setIsDivDisabled] = useState<boolean>(false);
  const [requestStatus, setRequestStatus] = useState<number>(0);
  const [postURL] = useState<string>(
    "https://api-front-test.k8s.smarttbot.com/api/v1/robot"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataForm: ICreateRobot = {
      title: productName,
      initial_capital: capitalValue,
      strategy_id: strategy === "tangram" ? 0 : 1,
      mode: 0,
      simulation: 0,
    };
    setIsPosting(true);
    await fetch(postURL, {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response: Response) => {
      setRequestStatus(response.status);
      if (response.status >= 200 && response.status < 300) {
        setIsPosting(false);
        setIsPopupOpen(true);
        setIsDivDisabled(true);
        return response;
      } else {
        setIsPopupOpen(true);
        setIsDivDisabled(true);
        console.log("Algo deu errado no processo de criação do robô!");
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "form_product":
        setProductName(e.target.value);
        break;
      case "form_money":
        const test = e.target.value
          .replace("R$", "")
          .replace(".", "")
          .replace(",", ".");
        setCapitalValue(Number(test));
        break;
      default:
        console.log(e.target.id);
        setStrategy(e.target.id);
        break;
    }
  };
  return (
    <div className={styles.modalBackground}>
      <section className={styles.modalContainer}>
        {isPopupOpen && (
          <RobotPostModal
            popupSetter={setIsPopupOpen}
            fatherDisabledSetter={setIsDivDisabled}
            requestStatus={requestStatus}
          />
        )}
        <div className={isDivDisabled ? styles.disabledDiv : styles.enabledDiv}>
          <div className={styles.modalHeaderContainer}>
            <div>
              <span className={styles.addRobotText}>Adicionar novo Robô</span>
            </div>
            <div>
              <button
                className={styles.closeButton}
                onClick={() => props.modalSetter(false)}
              >
                ✖
              </button>
            </div>
          </div>
          <div className={styles.modalTitleContainer}>
            <h2>Vamos criar seu robô</h2>
            <span>Preencha as informações abaixo:</span>
          </div>
          <div className={styles.modalFormContainer}>
            <form id="robotForm" method="POST" onSubmit={handleSubmit}>
              <label className={styles.formLabelInput} htmlFor="form_product">
                Nome do produto
              </label>
              <input
                type="text"
                name="form_product"
                id="form_product"
                placeholder="Nome do produto"
                required
                onChange={handleChange}
              />

              <label className={styles.formLabelInput} htmlFor="product">
                Capital inicial do robô
              </label>
              {/*<input
              type="text"
              inputMode="decimal"
              name="form_money"
              id="form_money"
              placeholder="0,00"
  />*/}
              <CurrencyInput
                name="form_money"
                id="form_money"
                placeholder="R$"
                prefix="R$"
                decimalSeparator=","
                groupSeparator="."
                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
                required
                maxLength={9}
                onChange={handleChange}
              />

              <h3>Selecione uma das estratégias abaixo</h3>
              <div className={styles.modalFormStrategiesContainer}>
                <input
                  type="radio"
                  id="tangram"
                  name="strategy"
                  defaultChecked={true}
                  onChange={handleChange}
                />
                <label className={styles.formLabelRadio} htmlFor="tangram">
                  Tangram
                </label>
                <input
                  type="radio"
                  id="price_action"
                  name="strategy"
                  onChange={handleChange}
                />
                <label className={styles.formLabelRadio} htmlFor="price_action">
                  Price Action
                </label>
              </div>
            </form>
          </div>

          <div className={styles.modalButtonsContainer}>
            <div>
              <button
                className={styles.cancelButton}
                onClick={() => props.modalSetter(false)}
              >
                Cancelar
              </button>
            </div>
            <div>
              {isPosting ? (
                <button
                  form="robotForm"
                  type="submit"
                  className={
                    styles.createRobotButton + " " + styles.createRobotButton
                  }
                >
                  Criando • • •
                </button>
              ) : (
                <button
                  form="robotForm"
                  type="submit"
                  className={styles.createRobotButton}
                >
                  Criar robô
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RobotModal;
