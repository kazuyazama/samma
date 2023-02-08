import { IconSquareLetterA, IconSquareRoundedLetterQ } from '@tabler/icons-react';
import Link from 'next/link';
import { faqData } from '../assets/faqData';

const Faq = () => {
    return (
        <article className="border-8 border-secondary p-3 ">
        <h1 className="py-6 text-center text-2xl">よくある質問</h1>

        {faqData.map((faq) => (
          <article
            key={faq.answer}
            className="collapse-arrow collapse border-b border-dotted first-of-type:border-t"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-primary-content flex gap-3  ">
            <IconSquareRoundedLetterQ className='  text-primary' /> {faq.question}
            </div>
            <div className="collapse-content text-primary-content flex gap-3   ">
            <IconSquareLetterA size={30} className=' text-accent' />  <p>{faq.answer}</p>
            </div>
          </article>
        ))}
        <Link
          href="/"
          className=" col-span-full block py-3 pr-3 text-right "
        >
          詳しくみる
        </Link>
      </article>
    );
}


export default Faq