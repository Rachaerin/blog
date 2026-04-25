import EditableLink from "@/components/ui/editable-link";
import Header from "@/components/ui/header";
import { postsOrderedByDate } from "@/lib/posts";

export default function Home() {
  return (
    <main>
      <section>
        <p className="text-base font-serif mb-6 text-gray-900">
          I am a developer who appreciates clean, minimal aesthetics. I focus on
          creating functional, elegant solutions that solve real problems while
          maintaining simplicity and usability.
        </p>
        <p className="text-base font-serif mb-6 text-gray-900">
          I believe that what we create is the only thing that remains — a trace
          of our existence. Every line of code, every interface, every project
          is a small piece of humanity preserved in the digital realm.
          <br />
          I&apos;m driven by the desire to leave something meaningful behind.
          Whether it&apos;s a tool that helps someone work more efficiently, an
          experience that brings joy, or simply code that stands the test of
          time, I want my creations to have purpose and longevity.
        </p>
        <div className="text-base font-serif mb-6 text-gray-900">
          You can find some of these traces here:
          <Header />
        </div>
      </section>
      <section className="mt-4">
        <h2 className="text-lg font-semibold mb-4">Recent posts</h2>
        <ol className="relative border-s border-gray-300">
          {postsOrderedByDate.map((post, ind) => (
            <li className="mb-4 ms-4" key={ind}>
              <div
                className={`absolute w-3 h-3 ${
                  ind === 0 ? "bg-[#ff2056]" : "bg-gray-200"
                } rounded-full mt-2 -start-1.5 border border-white`}
              ></div>
              <time
                className={`mb-1 text-sm leading-none ${
                  ind === 0 ? "text-[#ff2056]" : "text-gray-500"
                }`}
              >
                {post.time}
              </time>
              <h3 className="text-base font-serif text-gray-900">
                <EditableLink
                  href={post.url}
                  className="text-base font-serif text-gray-900"
                >
                  {post.title}
                </EditableLink>
              </h3>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
