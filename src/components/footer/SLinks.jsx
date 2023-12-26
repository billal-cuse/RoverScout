export default function SLinks({ title, color }) {
    return (
      <>
        <li>
          <a
            className={` bg-black w-8 h-8 flex items-center justify-center rounded-full text-lg`}
            href="#"
          >
            {title}
          </a>
        </li>
      </>
    );
  }