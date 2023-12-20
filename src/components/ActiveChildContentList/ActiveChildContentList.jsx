import { Link, useNavigate } from "react-router-dom";
import styles from "./ActiveChildContentList.module.scss";

function ActiveChildVideosList({ data, heading, link }) {
  const navigate = useNavigate();

  if (!data) return;

  return (
    <div className={styles["active-child-content"]}>
      <h2 className={styles["active-child-content__heading"]}>{heading}</h2>
      {!data.length ? (
        <>
          <span className="text-2xl font-semibold">
            {`Start ${link === "games" ? "playing" : "watching"} ${link}`} --{" "}
            <span
              className="cursor-pointer"
              onClick={() => navigate(`/${link}`)}
            >{`Go to ${link} page `}</span>
          </span>
        </>
      ) : (
        <ul className={styles["active-child-content__list"]}>
          {data?.map((content) => (
            <li
              className={styles["active-child-content__item"]}
              key={content?.id}
            >
              <Link to={`/${link}/${content.src}`}>
                <img src={content?.thumbnail} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActiveChildVideosList;