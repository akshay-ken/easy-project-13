export function FooterStats({ statCount, children }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center font-one">
        <h2 className="text-Very-dark-desaturated-blue font-semibold text-2xl">
          {statCount}
        </h2>
        <p className="text-Dark-grayish-blue">{children}</p>
      </div>
    </>
  );
}
