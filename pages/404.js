import style from "./404.module.css";

export default (first) => {
  return (
    <div className={style.container}>
      <h1 className="title">
        404: La url no existe, presta más atención cara torta.
      </h1>
    </div>
  );
};
