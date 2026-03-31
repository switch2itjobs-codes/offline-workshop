import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import './HeroSection.css'

const HERO_LOGO_SRC =
  'http://switch2itjobs.com/wp-content/uploads/2026/03/Offline-Workshop.png'

const SUPPORT_VIDEO_INSTRUCTORS_SRC =
  'http://switch2itjobs.com/wp-content/uploads/2026/03/sit-april-square-1-.mov'
const SUPPORT_VIDEO_MENTORS_SRC =
  'http://switch2itjobs.com/wp-content/uploads/2026/03/SIT-MARCH-30TH-WEBSITE-3.mov'
const SUPPORT_VIDEO_COACH_SRC =
  'http://switch2itjobs.com/wp-content/uploads/2026/03/SIT-MARCH-31-WEBSITE-3-1.mov'

const PLACEMENT_LOGOS = [
  'http://switch2itjobs.com/wp-content/uploads/2026/03/1.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/2.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/3.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/4.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/5.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/6.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/7.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/8.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/9.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/10.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/11.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/12.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/13.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/14.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/15.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/16.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/17.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/18.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/19.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/20.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/21.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/22.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/23.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/24.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/25.png',
  'http://switch2itjobs.com/wp-content/uploads/2026/03/26.png',
]

const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons)

const chunkIntoRows = (icons: string[], rows: number) => {
  const baseSize = Math.floor(icons.length / rows)
  const remainder = icons.length % rows
  const result: string[][] = []
  let start = 0

  for (let i = 0; i < rows; i += 1) {
    const rowSize = baseSize + (i < remainder ? 1 : 0)
    result.push(icons.slice(start, start + rowSize))
    start += rowSize
  }

  return result
}

const [PLACEMENT_ROW1, PLACEMENT_ROW2, PLACEMENT_ROW3] = chunkIntoRows(PLACEMENT_LOGOS, 3)

const SUPPORT_CARDS = [
  {
    title: 'Meet our Trainers',
    description: 'Get your doubts cleared and understand the exact path to enter IT.',
    videoSrc: SUPPORT_VIDEO_INSTRUCTORS_SRC,
    imagePosition: '20% 35%',
  },
  {
    title: 'Learn From Achievers',
    description: 'Hear directly from our placed students about how they made the switch.',
    videoSrc: SUPPORT_VIDEO_MENTORS_SRC,
    imagePosition: '50% 40%',
  },
  {
    title: '1:1 Career Consultation',
    description: 'Get personalized guidance based on your background and goals.',
    videoSrc: SUPPORT_VIDEO_COACH_SRC,
    imagePosition: '78% 42%',
  },
] as const

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3v2M17 3v2M4.5 9.5h15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 5h11A3 3 0 0 1 20.5 8v11A3 3 0 0 1 17.5 22h-11A3 3 0 0 1 3.5 19V8A3 3 0 0 1 6.5 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 13h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function Pill({
  icon,
  children,
}: {
  icon: ReactNode
  children: string
}) {
  return (
    <div className="hs-pill">
      {icon}
      <span>{children}</span>
    </div>
  )
}

export default function HeroSection() {
  const pageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = pageRef.current
    if (!el) return

    let raf = 0
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0
        // Subtle parallax for the right blob.
        const blobX = Math.round(y * 0.03)
        const blobY = Math.round(y * 0.02)
        el.style.setProperty('--hs-blob-x', `${blobX}px`)
        el.style.setProperty('--hs-blob-y', `${blobY}px`)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="hs-page-shell" ref={pageRef}>
        <div className="hs-blob hs-blob--right" aria-hidden />

        <div className="hs-page">
          <div className="hs-container">
            <ScrollReveal delayMs={60}>
              <img
                className="hs-offlineLogo"
                src={HERO_LOGO_SRC}
                alt="Offline Workshop"
              />
            </ScrollReveal>

          <ScrollReveal>
            <h1 className="hs-title">
              <span className="hs-line hs-line--primary">
                Switch to <span className="hs-accent">IT</span>
              </span>
              <br />
              <span className="hs-line hs-line--secondary">
                &amp; Unlock High-Paying Careers
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <div className="hs-subtitleGroup">
              <p className="hs-subtitle">
                This hands-on career transformation offline workshop shows you
                exactly how we transform non-IT professionals to IT jobs with
                average packages of{' '}
                <span className="hs-subtitle-emphasis">{'20 LPA'}</span>.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={240}>
            <div className="hs-dates">
              <div className="hs-dateRow">
                <Pill icon={<CalendarIcon />}>4th April, Saturday</Pill>
                <Pill icon={<ClockIcon />}>3 PM to 6 PM</Pill>
                <Pill icon={<LocationIcon />}>Gachibowli</Pill>
              </div>
            </div>
            <div className="hs-offerBarInner">
              <div className="hs-priceLeft">
                <div className="hs-priceLine">
                  <span className="hs-currentPrice">₹499</span>
                  <span className="hs-oldPrice">₹1,999</span>
                </div>
              </div>

              <a
                className="hs-joinBtn"
                href="https://switch2itjobs.com/checkout/?add-to-cart=9783"
              >
                Register Now
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={360} className="hs-reveal--video">
            <div className="hs-videoWrap">
              <div className="hs-videoAspect">
                <video
                  src="http://switch2itjobs.com/wp-content/uploads/2026/03/sit-april-1-5555555.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Workshop preview video"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={420} className="hs-reveal--placements">
            <section className="hs-placements">
              <div className="hs-placementsGrid" aria-hidden />
              <div className="hs-placementsInner">
                <span className="hs-placementsBadge">Our Placements</span>
                <h2 className="hs-placementsTitle">
                  Our Students get <span className="hs-placementsTitleAccent">average package</span> of
                  {' '}
                  <span className="hs-placementsTitleAccent">20LPA</span>
                </h2>
                <p className="hs-placementsText">
                  Achieved through our practical training and a proven job-focused approach.
                </p>

                <div className="hs-logoMarquee">
                  <div className="hs-logoTrack hs-logoTrack--left">
                    {repeatedIcons(PLACEMENT_ROW1, 4).map((src, i) => (
                      <img
                        key={`r1-${i}`}
                        src={src}
                        alt="placement company logo strip"
                        className="hs-logoStripImage"
                      />
                    ))}
                  </div>

                  <div className="hs-logoTrack hs-logoTrack--right hs-logoTrack--middle">
                    {repeatedIcons(PLACEMENT_ROW2, 4).map((src, i) => (
                      <img
                        key={`r2-${i}`}
                        src={src}
                        alt="placement company logo strip"
                        className="hs-logoStripImage"
                      />
                    ))}
                  </div>

                  <div className="hs-logoTrack hs-logoTrack--left">
                    {repeatedIcons(PLACEMENT_ROW3, 4).map((src, i) => (
                      <img
                        key={`r3-${i}`}
                        src={src}
                        alt="placement company logo strip"
                        className="hs-logoStripImage"
                      />
                    ))}
                  </div>

                  <div className="hs-logoFade hs-logoFade--left" />
                  <div className="hs-logoFade hs-logoFade--right" />
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delayMs={500} className="hs-reveal--support">
            <section className="hs-supportSection">
              <div className="hs-placementsInner">
                <h2 className="hs-placementsTitle">
                  Workshop <span className="hs-placementsTitleAccent">Highlights</span>
                </h2>
              </div>
              <div className="hs-supportGrid">
                {SUPPORT_CARDS.map((card) => (
                  <article className="hs-supportCard" key={card.title}>
                    <div className="hs-supportImageWrap">
                      <video
                        src={card.videoSrc}
                        className="hs-supportImage"
                        style={{ objectPosition: card.imagePosition }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        aria-label={`${card.title} video`}
                      />
                    </div>
                    <h3 className="hs-supportCardTitle">{card.title}</h3>
                    <p className="hs-supportCardText">{card.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </ScrollReveal>

          </div>
        </div>
      </div>
      <div className="hs-offerBar">
        <div className="hs-offerBarInner">
          <div className="hs-priceLeft">
            <div className="hs-priceLine">
              <span className="hs-currentPrice">₹499</span>
              <span className="hs-oldPrice">₹1,999</span>
            </div>
          </div>

          <a
            className="hs-joinBtn"
            href="https://switch2itjobs.com/checkout/?add-to-cart=9783"
          >
            Register Now
          </a>
        </div>
      </div>
    </>
  )
}

