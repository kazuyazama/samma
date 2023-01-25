import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  tel: string;
  message: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className="container mx-auto px-3 py-10 pt-5 ">
      <form
        className="grid gap-7  items-center justify-items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full items-center max-w-xl gap-3">
          <label htmlFor="name" className=" self-start">
            <span
              className=" pr-2 tooltip tooltip-open tooltip-right tooltip-accent"
              data-tip="必須"
            >
              お名前
            </span>
          </label>
          <input
            id="name"
            placeholder="山田太郎"
            required
            className="input input-bordered input-primary w-full "
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className=" self-start">お名前を入力してください。</span>
          )}
        </div>

        <div className="form-control w-full items-center max-w-xl gap-3">
          <label htmlFor="email" className=" self-start">
            <span
              className=" pr-2 tooltip tooltip-open tooltip-right tooltip-accent"
              data-tip="必須"
            >
              メールアドレス
            </span>
          </label>
          <input
            id="email"
            placeholder="yamada@gmail.com"
            required
            className="input input-bordered input-primary w-full "
            {...register("email", { required: true })}
          />

          {errors.email && (
            <span className=" self-start">
              メールアドレスを入力してください。
            </span>
          )}
        </div>

        <div className="form-control w-full items-center max-w-xl gap-3">
          <label htmlFor="tel" className=" self-start">
            <span
              className=" pr-2 tooltip tooltip-open tooltip-right tooltip-accent"
              data-tip="必須"
            >
              電話番号
            </span>
          </label>
          <input
            id="tel"
            placeholder="09012345678"
            required
            className="input input-bordered input-primary w-full "
            {...register("tel", { required: true })}
          />
          {errors.email && (
            <span className=" self-start">電話番号を入力してください。</span>
          )}
        </div>

        <div className="form-control w-full items-center max-w-xl gap-3">
          <label htmlFor="message" className=" self-start">
            <span
              className=" pr-2 tooltip tooltip-open tooltip-right tooltip-primary"
              data-tip="任意"
            >
              お問い合わせ内容
            </span>
          </label>
          <textarea
            id="message"
            className="textarea textarea-bordered w-full h-48 textarea-primary"
            placeholder="子供連れでも大丈夫ですか？"
            {...register("message", { required: false })}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-60">
          送信する
        </button>
      </form>
    </section>
  );
}
