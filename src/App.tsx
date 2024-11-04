import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import { appSt } from "./style.css";

import { useEffect, useState } from "react";
import { Gap } from "@alfalab/core-components/gap";
import { StatusBadge } from "@alfalab/core-components/status-badge";

export const App = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isGameStopped, setIsGameStopped] = useState(false);
  const [selected, setSelected] = useState<null | number>(null);
  const [initialNumbers, setInitialNumbers] = useState<number[]>([
    35, 32, 25, 41,
  ]);

  useEffect(() => {
    if (selected !== null) {
      if (selected === 32) {
        setSuccess(true);
      } else {
        setError(true);
      }
    }
  }, [selected]);

  return (
    <>
      <Gap size={28} />
      <div className={appSt.container}>
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          {success
            ? "Поздравляем, вы выиграли приз!"
            : "Посчитайте сумму всех цифр и выиграйте приз!"}
        </Typography.TitleResponsive>

        <Gap size={32} />

        {!success && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
            {[12, 9, 4, 7].map((number) => (
              <Typography.Text weight="bold" view="primary-medium">
                {number}
              </Typography.Text>
            ))}
          </div>
        )}

        <Gap size={success ? 72 : 40} />

        {success ? (
          <div
            style={{
              border: "2px solid #F2F3F5",
              padding: "1rem",
              boxSizing: "border-box",
              flex: 1,
              width: "100%",
              borderRadius: "16px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <StatusBadge
              view="positive-checkmark"
              size={20}
              className={appSt.checkMark}
            />
            <Typography.Text weight="bold" view="primary-medium">
              {selected}
            </Typography.Text>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
              width: "100%",
            }}
          >
            {initialNumbers.map((number) => (
              <div
                key={number}
                style={{
                  border: "2px solid #F2F3F5",
                  padding: "1rem",
                  boxSizing: "border-box",
                  flex: 1,
                  width: "100%",
                  borderRadius: "16px",
                  textAlign: "center",
                  ...(selected === number &&
                    selected !== 32 && { backgroundColor: "red" }),
                }}
                onClick={() => {
                  if (!isGameStopped) {
                    setSelected(number);
                    setIsGameStopped(true);
                  }
                }}
              >
                <Typography.Text weight="bold" view="primary-medium">
                  {number}
                </Typography.Text>
              </div>
            ))}
          </div>
        )}

        <Gap size={success ? 96 : 40} />

        {error && (
          <div style={{ textAlign: "center" }}>
            <Typography.Text
              weight="regular"
              color="negative"
              view="primary-large"
            >
              Близко, но нет. Попробуйте еще раз!
            </Typography.Text>
          </div>
        )}

        {success && (
          <>
            <Typography.Text weight="bold" view="primary-large">
              Приз!
            </Typography.Text>
            <Typography.Text weight="regular" view="primary-medium">
              До 80% кэшбэка в Яндекс.Маркете
            </Typography.Text>
          </>
        )}
      </div>

      <Gap size={40} />

      <div className={appSt.bottomBtnThx}>
        {success && (
          <ButtonMobile block view="primary" href="">
            Забрать приз
          </ButtonMobile>
        )}
        {error && (
          <ButtonMobile
            block
            view="primary"
            onClick={() => {
              setError(false);
              setSelected(null);
              setIsGameStopped(false);
              setInitialNumbers(initialNumbers.sort(() => 0.5 - Math.random()));
            }}
          >
            Сыграть еще
          </ButtonMobile>
        )}
      </div>
    </>
  );
};
