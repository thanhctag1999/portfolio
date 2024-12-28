import { Fragment, Suspense, lazy } from 'react';
import appBanner from '~/assets/app.jpg';
import minigame from '~/assets/minigame.png';
import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from '~/assets/volkihar-banner.jpg';
import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import volkiharEnderalLogoLarge from '~/assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogo from '~/assets/volkihar-enderal-logo.png';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from '~/assets/volkihar-enderal.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './volkihar-knight.module.css';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

const title = 'Cross-platform mobile app.';
const description =
  'Develop a personalized, exclusive mobile app for a truly exciting experience.';
const roles = ['UX - UI Design', 'Flutter', 'Firebase'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function VolkiharKnight() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(0.75 0.16 207.35);
              --accent: oklch(0.75 0.16 207.35);
            }
            [data-theme='light'] {
              --primary: oklch(0.75 0.16 207.35);
              --accent: oklch(0.75 0.16 207.35);
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Get the mod"
          url="https://www.nexusmods.com/skyrimspecialedition/mods/4806/"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.armor}>
              <Suspense>
                 <ProjectImage
              srcSet={`${appBanner} 800w, ${appBanner} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
              </Suspense>
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Ecommerce Mobile App</ProjectSectionHeading>
              <ProjectSectionText>
                The mobile sales application is designed to provide a seamless and intuitive shopping experience on the go. With a user-friendly interface, customers can easily browse through a wide range of products, view detailed descriptions, and make secure purchases directly from their mobile devices.
              </ProjectSectionText>
              <ProjectSectionText>
               The app supports multiple payment options, offers personalized recommendations, and allows users to track their orders in real-time. Features like push notifications keep customers updated on special offers and new arrivals, ensuring they never miss out on a great deal. With fast performance and a smooth checkout process, the app enhances the overall shopping experience, making it convenient and efficient.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.logoContainer}>
              <ProjectImage
              srcSet={`${minigame} 800w, ${minigame} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            </div>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Mini game</ProjectSectionHeading>
              <ProjectSectionText>
               The mobile mini game is designed to provide quick, engaging, and entertaining gameplay experiences right at your fingertips. With simple controls and exciting challenges, players can enjoy short yet immersive sessions that are perfect for quick breaks or casual gaming. The game features vibrant graphics, dynamic levels, and fun mechanics that keep players coming back for more. Whether it’s solving puzzles, completing challenges, or competing for high scores, this mini game is perfect for anyone looking to unwind and have fun on their mobile device.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`}
              width={1280}
              height={720}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
              srcSet={`${volkiharEnderalLogo} 1280w, ${volkiharEnderalLogoLarge} 1920w`}
              width={1280}
              height={720}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
              <ProjectSectionHeading>Medical appointment scheduling app</ProjectSectionHeading>
              <ProjectSectionText>
                The medical appointment scheduling app is designed to make booking doctor visits easy and convenient. With a simple and intuitive interface, users can quickly find available doctors, view their schedules, and book appointments at their preferred times. The app allows users to search for doctors by specialty, location, or rating, ensuring they find the right healthcare provider. It also provides reminders for upcoming appointments, easy rescheduling options, and a secure platform for sharing personal health information. With this app, managing healthcare appointments becomes hassle-free and efficient.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
