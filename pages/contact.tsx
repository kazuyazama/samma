import { NextSeo } from "next-seo";
import { useForm, SubmitHandler } from "react-hook-form";
import Breadcrumbs from "../components/Atoms/Breadcrumbs";
import TopTitleText from "../components/Atoms/TopTitleText";

type Inputs = {
  name: string;
  email: string;
  tel: string;
  message: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
    <NextSeo
    title="お問い合わせ" 
    openGraph={{
      url: "https://www.restarts.co.jp/service",
      title: "お問い合わせ | ホワイトニングsamma(サンマ）",
    }} 
  />
    <section className="container mx-auto px-3 py-10 pt-5 ">
      <div className="container mx-auto grid grid-cols-4 gap-14 px-3 ">
        <div className=" col-span-full ">
          <div className="flex flex-col gap-5 ">
            <Breadcrumbs>お問い合わせ</Breadcrumbs>
          </div>
        </div>

        <article className=" col-span-full pb-20">
          <TopTitleText>お問い合わせ</TopTitleText>

          <p className="pt-10 pb-2">
            ホワイトニングカフェ総合問合せ窓口です。
            <br />
            下記フォームより必要事項を入力の上、送信ください。
          </p>
          <form
            className="grid items-center  justify-items-center gap-7 bg-secondary px-3 lg:px-0  py-10  "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control w-full max-w-2xl items-center gap-3">
              <label htmlFor="name" className=" self-start ">
                <span className="after:ml-3 after:inline-block after:rounded-lg after:bg-accent after:py-0.5 after:px-1 after:text-sm after:text-base-100 after:content-['必須']">
                  名前
                </span>
              </label>
              <input
                id="name"
                placeholder="山田太郎"
                required
                className="input-bordered input-primary input w-full "
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className=" self-start">お名前を入力してください。</span>
              )}
            </div>

            <div className="form-control w-full max-w-2xl items-center gap-3">
              <label htmlFor="email" className=" self-start">
                <span className="after:ml-3 after:inline-block after:rounded-lg after:bg-accent after:py-0.5 after:px-1 after:text-sm after:text-base-100 after:content-['必須']">
                  メールアドレス
                </span>
              </label>
              <input
                id="email"
                placeholder="yamada@gmail.com"
                required
                className="input-bordered input-primary input w-full "
                {...register("email", { required: true })}
              />

              {errors.email && (
                <span className=" self-start">
                  メールアドレスを入力してください。
                </span>
              )}
            </div>

            <div className="form-control w-full max-w-2xl items-center gap-3">
              <label htmlFor="tel" className=" self-start">
                <span className="after:ml-3 after:inline-block after:rounded-lg after:bg-accent after:py-0.5 after:px-1 after:text-sm after:text-base-100 after:content-['必須']">
                  電話番号
                </span>
              </label>
              <input
                id="tel"
                placeholder="09012345678"
                required
                className="input-bordered input-primary input w-full "
                {...register("tel", { required: true })}
              />
              {errors.email && (
                <span className=" self-start">
                  電話番号を入力してください。
                </span>
              )}
            </div>

            <div className="form-control w-full max-w-2xl items-center gap-3">
              <label htmlFor="message" className=" self-start">
                <span className="after:ml-3 after:inline-block after:rounded-lg after:bg-primary after:py-0.5 after:px-1 after:text-sm after:text-base-100 after:content-['任意']">
                  お問い合わせ内容
                </span>
              </label>
              <textarea
                id="message"
                className="textarea-bordered textarea-primary textarea h-48 w-full"
                placeholder="子供連れでも大丈夫ですか？"
                {...register("message", { required: false })}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary btn w-60 text-base-100 text-lg">
              送信する
            </button>
          </form>
        </article>
      </div>
    </section>
    </>
  );
}

export default Contact;
