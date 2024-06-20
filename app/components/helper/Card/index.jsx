import React from 'react';
import styles from './responsiveCardStyles.module.scss'; // Importing with a different name

const Card = () => {
  return (
    
	<div class="container py-4">

		<article class={`${styles.postcard} ${styles.dark} ${styles.blue} ${styles.linkWrapper}`}>
			<a class={styles.postcard__img_link} href="#">
				<img class={styles.postcard__img} src="https://picsum.photos/1000/1000" alt="Image Title" />
			</a>
			<div class={styles.postcard__text}>
				<h1 class={`${styles.postcard__title} ${styles.blue}`}><a href="#">Podcast Title</a></h1>
				<div class={`${styles.postcard__subtitle} ${styles.small}`}>
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class={styles.postcard__bar}></div>
				<div class={styles.postcard__preview_txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul class={styles.postcard__tagbox}>
					<li class={styles.tag__item}><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class={styles.tag__item}><i class="fas fa-clock mr-2"></i>55 mins.</li>
					<li class={`${styles.tag__item} ${styles.blue} ${styles.play}`}>
						<a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
	</div>

  );
};

export default Card;