import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import { appSt } from "./style.css";

import read1 from "./assets/read1.jpeg";
import read2 from "./assets/read2.jpg";
import read3 from "./assets/read3.png";
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

  const clickSuccess = () => {
    window.gtag("event", "prize_page_view", {
      variant_name: "reactivation_3",
    });
  };

  const clickSubmit = () => {
    window.gtag("event", "prize_get_click", {
      variant_name: "reactivation_3",
    });
  };

  const clickInteraction = () => {
    window.gtag("event", "game_interaction", {
      variant_name: "reactivation_3",
    });
  };

  useEffect(() => {
    if (selected !== null) {
      if (selected === 32) {
        setSuccess(true);
        clickSuccess();
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
            : "Сложите все числа и выиграйте приз"}
        </Typography.TitleResponsive>

        <Gap size={32} />

        {!success && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
            {[12, "+", 9, "+", 4, "+", 7, "="].map((number) => (
              <Typography.Text weight="bold" view="primary-medium">
                {number}
              </Typography.Text>
            ))}
          </div>
        )}

        <Gap size={40} />

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
                    clickInteraction();
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

        <Gap size={40} />

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
              Кэшбэк у партнёров
            </Typography.Text>
            <Gap size={24} />
            <div className={appSt.gifts}>
              <div className={appSt.gift}>
                <div className={appSt.imageWrapper}>
                  <img src={read3} alt="" className={appSt.giftImage} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "auto",
                    }}
                  >
                    <Typography.Text weight="regular" view="primary-large">
                      Литрес
                    </Typography.Text>
                    <Gap size={8} />
                    <Typography.Text
                      weight="regular"
                      view="primary-small"
                      color="secondary"
                    >
                      За оплату картой онлайн
                    </Typography.Text>
                  </div>

                  <Typography.Text weight="regular" view="primary-large">
                    20%
                  </Typography.Text>
                </div>
              </div>
              <div className={appSt.gift}>
                <div className={appSt.imageWrapper}>
                  <img src={read1} alt="" className={appSt.giftImage} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "auto",
                    }}
                  >
                    <Typography.Text weight="regular" view="primary-large">
                      Читай Город
                    </Typography.Text>
                    <Gap size={8} />
                    <Typography.Text
                      weight="regular"
                      view="primary-small"
                      color="secondary"
                    >
                      За оплату картой онлайн
                    </Typography.Text>
                  </div>

                  <Typography.Text weight="regular" view="primary-large">
                    10%
                  </Typography.Text>
                </div>
              </div>
              <div className={appSt.gift}>
                <div className={appSt.imageWrapper}>
                  <img
                    src={read2}
                    alt=""
                    className={appSt.giftImage}
                    style={{ transform: "scale(1.1)" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "auto",
                    }}
                  >
                    <Typography.Text weight="regular" view="primary-large">
                      Буквоед
                    </Typography.Text>
                    <Gap size={8} />
                    <Typography.Text
                      weight="regular"
                      view="primary-small"
                      color="secondary"
                    >
                      За оплату картой онлайн
                    </Typography.Text>
                  </div>

                  <Typography.Text weight="regular" view="primary-large">
                    10%
                  </Typography.Text>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtnThx}>
        {success && (
          <ButtonMobile block view="primary" href="https://alfa.me/cbpartner" onClick={clickSubmit}>
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
