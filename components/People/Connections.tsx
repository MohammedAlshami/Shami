import React from "react";

const Connections = () => {
  const team = [
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D4E03AQEefCV-uYCssw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668613314087?e=1732752000&v=beta&t=kk5xeldw4YOzf_cYdhKevm7fbSpGBVGOXEIq6sqhO-o",
      name: "GD Naidu, (Ph.D)",
      title:
        "Mind Hustler | Servitization Strategist | A Messenger | Life & Business Mentor |",
      desc: "still don't get his personality but it seems he wants to help",
      linkedin: "https://www.linkedin.com/in/drgd05/",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQGFyDOjdYVCBQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687780409251?e=1732752000&v=beta&t=lgp305sSKNWQPOhQeSDOWL_woxV86nELMjk41WmH0zQ",
      name: "Ammar Azfar Azli",
      title: "Entrepreneur Experience Associate @ Endeavor Malaysia",
      desc: "An Alumni of uniten, a very nice and cheerful person and can help us connect with a lot of people",
      linkedin: "https://www.linkedin.com/in/ammar-azfar-azli-8579961a4/",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },

    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQGa7Xo3s9kgog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701775034627?e=1732752000&v=beta&t=ujyBoKHSluj_O5EB8E6O2FrXGtJgHlBHaJfCcdYT7y8",
      name: "Najla Zamri",
      title: "Senior Manager, Antler",
      desc: "Corporate Greedy but can be helpful if we want to work with anyone associated with antler",
      linkedin: "https://www.linkedin.com/in/najlazamri",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQFVSfl4kdmPZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725467551644?e=1732752000&v=beta&t=Xbtz0XV-ym8F_pd3KT10HlX4TYFjKiF26HjEujOQBSU",
      name: "Annie Leong",
      title: "Co-founder @ Rizurf",
      desc: "very friendly, but I struggle to see where she can help us, except maybe when it comes to construction she might have connections",
      linkedin: "https://www.linkedin.com/in/annie-leong-26536b1/",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQFBGpv0UVdFeA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718261101702?e=1732752000&v=beta&t=JG0F9od32HCZGuG6lxvvfP23Sx0pXa6mx35ld3Tntec",
      name: "Burhan Hafeedh",
      title: "member of CYMG",
      desc: "not much of help but he's very passionate about natural disasters",
      linkedin: "https://www.linkedin.com/in/burhan-hafeedh-75078b2a7/",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQGC_SxU0qLlaA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708132633387?e=1732752000&v=beta&t=gf12dFKVBLBMLoQzA1WvWIyWHtT9qF7eFoTLa7G9LDE",
      name: "Jaclyn Chen",
      title: "Founder @ Volunti Connect",
      desc: "She can help us connect with NGOs",
      linkedin: "https://www.linkedin.com/in/jaclyn-chen/",
      twitter: "",
      github: "",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQFpfgiEqgubaQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692474353849?e=1732752000&v=beta&t=Vx0GfijZILrnP5iHFDZ5Epacvof4jxaMwKzpHJQ_RUo",
      name: "Saraswathy Shamini",
      title: "Director @ IICE UNITEN",
      desc: "Not much of actual help but she can connect us with potential clients and companies",
      linkedin: "https://www.linkedin.com/in/saraswathyshamini/",
      twitter: "",
      github: "",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/C4E03AQETVq6FT_-hcA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1645017927100?e=1732752000&v=beta&t=VQhwoJK--BkmxAZJl3EnTfeuMTprd0TW95nMkCck0rI",
      name: "Tan Ze Han Dylan",
      title: "Data Engineer Intern @ MoneyLion",
      desc: "Can't think of ways he can help but he might have connections that could benefit us",
      linkedin: "https://www.linkedin.com/in/tan-ze-han-dylan-upm-03814b20b/",
      twitter: "",
      github: "",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQH5APoJTSgC4A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678081208378?e=1732752000&v=beta&t=O1dkSU3mY5YJakk1FJP5D_cyX-b7McsNE3WwrOrGcLg",
      name: "Sherif Abouelmagd",
      title:
        "Co-Founder of  EasyFastAI & Senior Software Engineer @ Doctor On Call",
      desc: "Can't say much about him but I put him for the sake of it lol",
      linkedin: "https://www.linkedin.com/in/sherif-abouelmagd/",
      twitter: "",
      github: "",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/C5603AQEBy2eG6-Yjkg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1625024192462?e=1732752000&v=beta&t=wGPjIpQaYrBlk552oHt3OcZgpzL0x1sZdy16rus1Eko",
      name: "Khairi Azim Kamal Ariffin",
      title: "Project Engineer @ TNB",
      desc: "can be of help when it comes to palm oil plantations",
      linkedin: "https://www.linkedin.com/in/khairi-azim/",
      twitter: "",
      github: "",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQGR09bFF-kB7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678247856828?e=1732752000&v=beta&t=Sz6rgWtl2gbUj3DXZwsj_P8eA6OjCmbaPTwueTUEvOs",
      name: "Daren Tan",
      title: "Founder, Developer Kaki | CEO, ALPHV",
      desc: "very active and very friendly, can help connect us with a lot of people, big people, but can only reach out to him when we're kind of big",
      linkedin: "https://www.linkedin.com/in/daren-tan/",
      twitter: "",
      github: "",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQEi1JAk7LMSgg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720354646120?e=1732752000&v=beta&t=j2GDGn-sEHU1_DePDNoVuAT4enrKXLUUjcvMi_kC_8s",
      name: "Zach Azizul Othman",
      title: "CEO @ Lekir Tech",
      desc: "Seems like a good person, but don't know much about him",
      linkedin: "https://www.linkedin.com/in/zach-azizul-othman/",
      twitter: "",
      github: "",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQEq7BMTeSSfwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699927586302?e=1732752000&v=beta&t=ty9z-5dPRrKEfPTbmlR0saz-huVWtfVGgAatLsSEidA",
      name: "Roman Jaquez",
      title: "Flutter GDE | Senior Software Development Engineer at Philips",
      desc: "very friendly and can prove to be useful in the future",
      linkedin: "https://www.linkedin.com/in/roman-jaquez-8941a424/",
      twitter: "",
      github: "",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D4E03AQE_RRky29pDlQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1673318644279?e=1732752000&v=beta&t=MCAzof3xL-UHTUgfaWG1vE5KgwB-lmioLe_Hy97lTPo",
      name: "Qistina Izahan",
      title: "Co-founder at The Quack Movement & PasarKraf",
      desc: "a bit narcissistic but she can help",
      linkedin: "https://www.linkedin.com/in/qistina-izahan-a51602261/",
      twitter: "",
      github: "",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQHbAa9jhtu9tA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726986252527?e=1732752000&v=beta&t=Y3Njyp1N_uy7Vtm2ss3eA0glJZy-kAqofmfWC_slzIQ",
      name: "Arinn Danish",
      title: "Founder of IntelliLabs AI",
      desc: "a great asset and will definitely  help a lot",
      linkedin: "https://www.linkedin.com/in/arinn-danish-a54239223/",
      twitter: "",
      github: "",
    },
    {
      avatar:
        "https://media.licdn.com/dms/image/v2/C5603AQGb_QL_j3-RYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1622870231418?e=1732752000&v=beta&t=9TTADhB6TtZKWsO3ERr4i7c0y8YM0yFw5LKzMlPoH7s",
      name: "Badariah Solemon",
      title: "Head of Unit (Research), Institute of Energy Infrastructure",
      desc: "Greatest teacher every, but very critical. despite that, she loves us and would do whatever she can to help us. she also feels a little bit guilty because of rohayu's job",
      linkedin: "https://www.linkedin.com/in/badariah-solemon-10325221/",
      twitter: "",
      github: "",
    },
  ];

  return (
    <section className="py-14 my-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-200 text-3xl font-semibold sm:text-4xl">
            Connections
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {team.map((item, idx) => (
              <li
                key={idx}
                className="gap-8 sm:flex bg-neutral-800/40 border border-neutral-800/80 border-4 p-8 rounded-xl hover:-translate-y-6 transition-transform duration-500 ease-in-out"
              >
                <div className="w-full h-60">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-lg text-gray-200 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-indigo-200">{item.title}</p>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                  <div className="mt-3 flex gap-4 text-gray-200">
                    <a href={item.twitter}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g clip-path="url(#clip0_17_80)">
                          <path
                            fill="currentColor"
                            d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_80">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={item.github}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g fill="currentColor" clip-path="url(#clip0_910_44)">
                          <path
                            fill-rule="evenodd"
                            d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                            clip-rule="evenodd"
                          />
                          <path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_910_44">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={item.linkedin}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <g clip-path="url(#clip0_17_68)">
                          <path
                            fill="currentColor"
                            d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_68">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Connections;
