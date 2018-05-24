import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  shows = [
    {
      id: '5947862b734d1d59b789b29e',
      title: '13 Reasons Why',
      year: '2017–',
      releaseDate: '31 Mar 2017',
      genre: 'Drama, Mystery',
      plot: 'Thirteen Reasons Why, based on the best-selling books by Jay Asher, follows teenager Clay Jensen (Dylan Minnette) as he returns home from school to find a mysterious box with his name on it lying on his porch. Inside he discovers a group of cassette tapes recorded by Hannah Baker (Katherine Langford) -his classmate and crush-who tragically committed suicide two weeks earlier. On tape, Hannah unfolds an emotional audio diary, detailing the thirteen reasons why she decided to end her life. Through Hannah and Clay\'s dual narratives, Thirteen Reasons Why weaves an intricate and heartrending story of confusion and desperation that will deeply affect viewers.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/gpULvrgvq1Qidu8EpWevrRUfVhw.jpg',
      imdbRating: '8.8',
      releasedDate: '2017-03-31T00:00:00.000Z'
    },
    {
      id: '58fd1439f36d285bbc1307b1',
      title: 'Agent Carter',
      year: '2015–2016',
      releaseDate: '06 Jan 2015',
      genre: 'Action, Adventure, Sci-Fi',
      plot: 'The war is over and almost everyone has experienced a loss. Agent Peggy Carter has lost the love of her life. To top it off, when billionaire Howard Stark is accused of Treason, he secretly employs her to clear his name. With the help of Stark\'s butler, she embarks on a whimsical journey full of deceit, murder and controversy with a side of wise-cracking roommates.',
      poster: 'http://techaeris.com/wp-content/uploads/2016/01/Agent-Carter-Poster.jpg',
      imdbRating: '8.0',
      releasedDate: '2015-01-06T01:00:00.000Z'
    },
    {
      id: '5aaee2d6f36d284c921540a7',
      title: 'Agents of S.H.I.E.L.D.',
      year: '2013–',
      releaseDate: '24 Sep 2013',
      genre: 'Action, Adventure, Drama',
      plot: 'After the Battle of New York, the world has changed. It now knows not only about the Avengers, but also the powerful menaces that require those superheroes and more to face them. In response, Phil Coulson of the Strategic Homeland Intervention, Enforcement and Logistics Division assembles an elite covert team to find and deal with these threats wherever they are found. With a world rapidly becoming more bizarre and dangerous than ever before as the supervillains arise, these agents of S.H.I.E.L.D. are ready to take them on.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xjm6uVktPuKXNILwjLXwVG5d5BU.jpg',
      imdbRating: '7.5',
      releasedDate: '2013-09-24T00:00:00.000Z'
    },
    {
      id: '594ed9db734d1d776aee3a8e',
      title: 'American Gods',
      year: '2017–',
      releaseDate: '30 Apr 2017',
      genre: 'Fantasy, Mystery',
      plot: 'Shadow is a man with a past. But now he wants nothing more than to live a quiet life with his wife and stay out of trouble. Until he learns that she\'s been killed in a terrible accident. Flying home for the funeral, as a violent storm rocks the plane, he is greeted by a strange man in the seat next to him. The man calls himself Mr. Wednesday, and he knows more about Shadow than is possible. He warns Shadow that a far bigger storm is coming. And from that moment on, nothing will ever be the same.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ovnH6mQfVembYErJXYhnh6e0R9C.jpg',
      imdbRating: '8.4',
      releasedDate: '2017-04-30T00:00:00.000Z'
    },
    {
      id: '58fd14eff36d285bbc1307d0',
      title: 'Arrow',
      year: '2012–',
      releaseDate: '10 Oct 2012',
      genre: 'Action, Adventure, Crime',
      plot: 'Oliver Queen and his father are lost at sea when their luxury yacht sinks, apparently in a storm. His father dies, but Oliver survives for five years on an uncharted island and eventually returns home. But he wasn\'t alone on the island where he learned not only how to fight and survive but also of his father\'s corruption and unscrupulous business dealings. He returns to civilization a changed man, determined to put things right. He disguises himself with the hood of one of his mysterious island mentors, arms himself with a bow and sets about hunting down the men and women who have corrupted his city.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/kxNiIRlYLLpEOFp2MCeGwdMMUwZ.jpg',
      imdbRating: '7.9',
      releasedDate: '2012-10-10T00:00:00.000Z'
    },
    {
      id: '58fd155ef36d285bbc1307dd',
      title: 'Bitten',
      year: '2014–2016',
      releaseDate: '13 Jan 2014',
      genre: 'Drama, Fantasy, Horror',
      plot: 'When she left Stonehaven - \'for good this time\' - Elena Michaels thought she had left the world of supernatural behind. Until the night she got a mysterious call from her pack leader asking her to come back. So now she is heading back, away from her normal life as a photographer in Toronto and back into the world of werewolves, full of rules about protect the pack and a man she had spent years trying to forget. As if things were not bad enough, Elena also happens to be the only living female werewolf.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/a98Kr3wdnSbK0RSvFh9pb3lfeu6.jpg',
      imdbRating: '7.1',
      releasedDate: '2014-01-13T01:00:00.000Z'
    },
    {
      id: '58fd159df36d285bbc1307e4',
      title: 'Black Sails',
      year: '2014–2017',
      releaseDate: '25 Jan 2014',
      genre: 'Adventure, Drama',
      plot: 'The pirate adventure "Black Sails" centers on the tales of Captain Flint and his men and takes place twenty years prior to Robert Louis Stevenson’s classic “Treasure Island”. Flint, the most brilliant and most feared pirate captain of his day, takes on a fast-talking young addition to his crew who goes by the name John Silver. Threatened with extinction on all sides, they fight for the survival of New Providence Island, the most notorious criminal haven of its day – a debauched paradise teeming with pirates, prostitutes, thieves and fortune seekers, a place defined by both its enlightened ideals and its stunning brutality.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/subOEoL9l6q03Qc4KktIvHpW632.jpg',
      imdbRating: '8.2',
      releasedDate: '2014-01-25T01:00:00.000Z'
    },
    {
      id: '5958aa1df36d287671cd74ec',
      title: 'Daredevil',
      year: '2015–',
      releaseDate: '10 Apr 2015',
      genre: 'Action, Crime, Drama',
      plot: 'As a child Matt Murdock was blinded by a chemical spill in a freak accident. Instead of limiting him it gave him superhuman senses that enabled him to see the world in a unique and powerful way. Now he uses these powers to deliver justice, not only as a lawyer in his own law firm, but also as vigilante at night, stalking the streets of Hell\'s Kitchen as Daredevil, the man without fear.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/yuREgPDprfhoGGfGinOICWMb247.jpg',
      imdbRating: '8.7',
      releasedDate: '2015-04-10T00:00:00.000Z'
    },
    {
      id: '5956ac9af36d286323c66430',
      title: 'Dominion',
      year: '2014–2015',
      releaseDate: '19 Jun 2014',
      genre: 'Action, Drama, Fantasy',
      plot: 'Follows the perilous journey of a rebellious young soldier who discovers he\'s the unlikely savior of humanity.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/czsPQq3YuWQpQARixOBczPbJVlL.jpg',
      imdbRating: '6.8',
      releasedDate: '2014-06-19T00:00:00.000Z'
    },
    {
      id: '58f6fb81734d1d33b3276936',
      title: 'Friends',
      year: '1994-2004',
      releaseDate: '22 Sep 1994',
      genre: 'Comedy, Romance',
      plot: 'Rachel Green, Ross Geller, Monica Geller, Joey Tribbiani, Chandler Bing and Phoebe Buffay are all friends, living off of one another in the heart of New York City. Over the course of ten years, this average group of buddies goes through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend.',
      poster: 'https://image.tmdb.org/t/p/w500/7buCWBTpiPrCF5Lt023dSC60rgS.jpg',
      imdbRating: '9.0',
      releasedDate: '1994-09-22T00:00:00.000Z'
    },
    {
      id: '590cc83ef36d287bf31f71fd',
      title: 'Game of Thrones',
      year: '2011–',
      releaseDate: '17 Apr 2011',
      genre: 'Adventure, Drama, Fantasy',
      plot: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jIhL6mlT7AblhbHJgEoiBIOUVl1.jpg',
      imdbRating: '9.5',
      releasedDate: '2011-04-17T00:00:00.000Z'
    },
    {
      id: '5aeecf26f36d2837eae68064',
      title: 'Iron Fist',
      year: '2017–',
      releaseDate: '17 Mar 2017',
      genre: 'Action, Adventure, Crime',
      plot: 'Danny Rand returns to New York City after being missing for years, trying to reconnect with his past and his family legacy. He fights against the criminal element corrupting his world around him with his incredible kung-fu mastery and ability to summon the awesome power of the fiery Iron Fist',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/nv4nLXbDhcISPP8C1mgaxKU50KO.jpg',
      imdbRating: '6.8',
      releasedDate: '2017-03-17T01:00:00.000Z'
    },
    {
      id: '5a759d3df36d281a9f55b9e8',
      title: 'Jessica Jones',
      year: '2015–',
      releaseDate: '20 Nov 2015',
      genre: 'Action, Crime, Drama',
      plot: 'Ever since her short-lived stint as a superhero ended in tragedy, Jessica Jones has been rebuilding her personal life and career as a hot-tempered, sardonic private detective in Hell\'s Kitchen, New York City. Plagued by self-loathing and a wicked case of PTSD, Jessica battles demons from within and without, using her extraordinary abilities as an unlikely champion for those in need... especially if they\'re willing to cut her a check.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/dWILlx5a1NnQgE6n4QU3jAv1J64.jpg',
      imdbRating: '8.2',
      releasedDate: '2015-11-20T01:00:00.000Z'
    },
    {
      id: '58fd15e8f36d285bbc1307f3',
      title: 'Legends of Tomorrow',
      year: '2016–',
      releaseDate: '21 Jan 2016',
      genre: 'Action, Adventure, Drama',
      plot: 'When heroes alone are not enough... the world needs legends. Having seen the future, Rip Hunter will desperately try to prevent certain events from happening, by time-traveling; Now Rip Hunter is tasked with assembling a desperate group of heroes and villains to confront an unstoppable threat - not only is the planet at stake, but our timeline itself. The Great Question being asked here is can this ragtag team defeat an immortal threat unlike anything they have ever known?',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jw0txL021CLRFMlCzC0XcONw9fQ.jpg',
      imdbRating: '7.1',
      releasedDate: '2016-01-21T01:00:00.000Z'
    },
    {
      id: '58ffc3ac734d1d6c1a2cd614',
      title: 'Lucifer',
      year: '2016–',
      releaseDate: '25 Jan 2016',
      genre: 'Crime, Drama, Fantasy',
      plot: 'Lucifer, bored from his sulking life in hell comes to live in Los Angeles only to help humanity with its miseries through his experience and telepathic abilities to bring people\'s deepest desires and thoughts out of them. While meeting with a girl in his nightclub (called Lux), a shootout involving him and the girl leads him to become a LAPD consultant who tries to punish people for their crimes through law and justice.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4tfVjOc5mD0dnakllL8nxyooxmO.jpg',
      imdbRating: '8.3',
      releasedDate: '2016-01-25T01:00:00.000Z'
    },
    {
      id: '5a75a0daf36d281a9f55ba76',
      title: 'Marvel\'s Luke Cage',
      year: '2016–',
      releaseDate: '30 Sep 2016',
      genre: 'Action, Crime, Drama',
      plot: 'When a sabotaged experiment gives him super strength and unbreakable skin, Luke Cage becomes a fugitive attempting to rebuild his life in Harlem and must soon confront his past and fight a battle for the heart of his city.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/9nWZZ1ghE0LuXEWJi7QjCymHygi.jpg',
      imdbRating: '7.6',
      releasedDate: '2016-09-30T00:00:00.000Z'
    },
    {
      id: '594ebc88734d1d776aee33e7',
      title: 'Sherlock',
      year: '2010–',
      releaseDate: '24 Oct 2010',
      genre: 'Crime, Drama, Mystery',
      plot: 'In this modernized version of the Conan Doyle characters, using his detective plots, Sherlock Holmes lives in early 21st century London and acts more cocky towards Scotland Yard\'s detective inspector Lestrade because he\'s actually less confident. Doctor Watson is now a fairly young veteran of the Afghan war, less adoring and more active.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg',
      imdbRating: '9.2',
      releasedDate: '2010-10-24T00:00:00.000Z'
    },
    {
      id: '5956a7e0f36d286323c660df',
      title: 'Spartacus: Gods of the Arena',
      year: '2011',
      releaseDate: '21 Jan 2011',
      genre: 'Action, Adventure, Biography',
      plot: 'Before Spartacus struck down his first opponent in the arena, there were many gladiators who passed through the gates onto the sand.\'Spartacus: Gods of the Arena\' tells the story of the original Champion of the House of Batiatus: Gannicus in a more ruthless time before Spartacus\' arrival where honor was just finding its way into the arena.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/A1QZOUnWvC5I805Y2q7OrCU4Vm2.jpg',
      imdbRating: '8.6',
      releasedDate: '2011-01-21T01:00:00.000Z'
    },
    {
      id: '58ffc70b734d1d6c1a2cd7a9',
      title: 'Stranger Things',
      year: '2016–',
      releaseDate: '15 Jul 2016',
      genre: 'Drama, Fantasy, Horror',
      plot: 'In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to the disappearance of a child - which begins to tear at the fabric of an otherwise peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town while a few locals begin to understand that there\'s more going on than meets the eye.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/esKFbCWAGyUUNshT5HE5BIpvbcL.jpg',
      imdbRating: '9.0',
      releasedDate: '2016-07-15T00:00:00.000Z'
    },
    {
      id: '58ffbd04734d1d6c1a2cd39e',
      title: 'Supergirl',
      year: '2015–',
      releaseDate: '26 Oct 2015',
      genre: 'Action, Adventure, Drama',
      plot: 'Years ago, Krypton was about to explode and Kal-El was sent to Earth to escape that fate. However, his older cousin, Kara, was also intended to accompany the infant as his protector. Unfortunately, Kara was accidentally diverted into the timeless Phantom Zone for years before finally arriving on Earth decades later and found by her cousin who had grown into Superman. Years later, Kara Danvers is a young professional adrift in a thankless job until a fateful crisis ignites a sense of purpose using Kryptonian powers she had long hidden. Inspired, Kara decides to emulate her cousin\'s superheroic ways, only to find her foster sister introducing her to the secret Department of Extra-Normal Operations, dedicated to fighting alien menaces including those Kara inadvertently led to Earth. Now with such help, the Maid of Might takes her place as Earth\'s newest champion with new friends and enemies challenging her world.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ufoGrTRbItHvqk42yNHcyoE0afM.jpg',
      imdbRating: '6.6',
      releasedDate: '2015-10-26T01:00:00.000Z'
    },
    {
      id: '590dfa36f36d281fc3b9219c',
      title: 'Teen Wolf',
      year: '2011–',
      releaseDate: '05 Jun 2011',
      genre: 'Action, Comedy, Drama',
      plot: 'Scott McCall was just another kid in high school. Until, one night his best friend Stiles brings him to the woods, to look for a dead body, and Scott is bitten by a werewolf. Being a werewolf came with its perks- stronger, faster, new star in the lacrosse team, popularity- but also made it hard to control his anger. Scott has also fallen for the new girl in town, Allison, whose dad is trying to hunt and kill Scott. Scott now has to try and balance his out of control life, figure out how to control his new powers, try not to be killed by the alpha that bit him, and protect Allison- and keep her from finding out his big secret.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/vY2vfAskJTiWsQSv6bdbNCQhPLm.jpg',
      imdbRating: '7.7',
      releasedDate: '2011-06-05T00:00:00.000Z'
    },
    {
      id: '58fd1606f36d285bbc1307fb',
      title: 'Terra Nova',
      year: '2011',
      releaseDate: '26 Sep 2011',
      genre: 'Adventure, Mystery, Sci-Fi',
      plot: 'In 2149, earth is nearly wrecked by pollution. Police detective Jim Shannon is jailed for illegally raising an extra child, Zoe. He\'s sprung from jail just in time to join his family on the latest \'pilgrimage\', through a unique time-space-continuum rip, to Terra Nova, a colony run with modern technology in a dino age forest. Colony commander Nathaniel Taylor soon recruits as security professional Jim, who gradually finds out about some threats, notably from Saurian monsters, the \'sixers\' and his own, bitterly estranged son Lucas. Meanwhile Jim\'s son Josh keeps getting into trouble, mainly due to his girlfriend Skye. His smart sister Maddy is in love with gentleman soldier Mark Reynolds.',
      poster: 'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/104420140426-posters-series-terra-nova-s1-poster-04.jpg',
      imdbRating: '6.8',
      releasedDate: '2011-09-26T00:00:00.000Z'
    },
    {
      id: '58fd162bf36d285bbc130806',
      title: 'The 100',
      year: '2014–',
      releaseDate: '19 Mar 2014',
      genre: 'Drama, Mystery, Sci-Fi',
      plot: 'The series is set 97 years after a devastating nuclear war wiped out almost all life on Earth. The only known survivors are the residents of twelve space stations in Earth\'s orbit prior to the war. The space stations banded together to form a single massive station named "The Ark", where about 2,400 people live. Resources are scarce and all crimes no matter their nature or severity are punishable by death ("floating") unless the perpetrator is under 18 years of age. After the Ark\'s life support systems are found to be critically failing, one hundred juvenile prisoners are declared "expendable" and sent to the surface in a last ditch attempt to determine if Earth is habitable again. However they discover that not all humanity was wiped out. There are people on Earth who survived the war, called "grounders" by the 100.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/uGMbllEELcPdtxxBGDQMLedn1fd.jpg',
      imdbRating: '7.8',
      releasedDate: '2014-03-19T01:00:00.000Z'
    },
    {
      id: '58fd1677f36d285bbc130820',
      title: 'The Blacklist',
      year: '2013–',
      releaseDate: '23 Sep 2013',
      genre: 'Crime, Drama, Mystery',
      plot: 'A highly articulate, erudite and intelligent businessman and mastermind, "Red" Reddington, has allegedly been on the "10 Most Wanted List" of various U.S. law enforcement agencies for over 20 years. The legend is that Red is as elusive as he is clever, controlling a labyrinth of creative enterprises, coupled with uncanny ability to gather and finesse information at the drop of a hat. On the first day at FBI for a new female profiler fresh out of Quantico, Red offers to bandy wits with the FBI. Red promises to deliver various criminals and plots previously unknown to any branch of law enforcement... and all Red requests in return is to choose his muse.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/y3Huzln26zGNW4RCr0h4PTwEpfi.jpg',
      imdbRating: '8.1',
      releasedDate: '2013-09-23T00:00:00.000Z'
    },
    {
      id: '5aeed8ccf36d2837eae68198',
      title: 'The Defenders',
      year: '2017–',
      releaseDate: '18 Aug 2017',
      genre: 'Action, Adventure, Crime',
      plot: '"Marvel\'s The Defenders" follows Daredevil, Jessica Jones, Luke Cage and Iron Fist. A quartet of singular heroes with one common goal - to save New York City. This is the story of four solitary figures, burdened with their own personal challenges, who realize they just might be stronger when teamed together.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/jbKR5H4CyFRn9FjTv0CvGBYyVdA.jpg',
      imdbRating: '7.6',
      releasedDate: '2017-08-18T00:00:00.000Z'
    },
    {
      id: '58fd1696f36d285bbc130831',
      title: 'The Flash',
      year: '2014–',
      releaseDate: '07 Oct 2014',
      genre: 'Action, Adventure, Drama',
      plot: 'Barry Allen is a Central City police forensic scientist with a reasonably happy life, despite the childhood trauma of a mysterious red and yellow lightning killing his mother and framing his father. All that changes when a massive particle accelerator accident leads to Barry being struck by lightning in his lab. Coming out of coma nine months later, Barry and his new friends at S.T.A.R labs find that he now has the ability to move at superhuman speed. Furthermore, Barry learns that he is but one of many affected by that event, most of whom are using their powers for evil. Determined to make a difference, Barry dedicates his life to fighting such threats, as The Flash. While he gains allies he never expected, there are also secret forces determined to aid and manipulate him for their own agenda.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg',
      imdbRating: '8.1',
      releasedDate: '2014-10-07T00:00:00.000Z'
    },
    {
      id: '58ffaa96734d1d6c1a2cc9aa',
      title: 'The Originals',
      year: '2013–',
      releaseDate: '03 Oct 2013',
      genre: 'Drama, Fantasy, Horror',
      plot: 'A spin-off from The Vampire Diaries and set in New Orleans, The Originals centers on the Mikaelson siblings, otherwise known as the world\'s original vampires: Klaus (Joseph Morgan), Elijah (Daniel Gillies), and Rebekah (Claire Holt). Now Klaus must take down his protege, Marcel (Charles Michael Davis), who is now in charge of New Orleans, in order to re-take his city, as he originally built New Orleans. Klaus departed from the city after being chased down by his father Mikael, while it was being constructed and Marcel took charge. As Klaus has returned after many years, his ego has provoked him to become the king of the city. "Every King needs an heir" says Klaus, accepting the unborn child. The child is a first to be born to a hybrid (part vampire, part werewolf) and a werewolf (Hayley).',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/EH9i14tYCUgq1LjrLNUVZlRB0i.jpg',
      imdbRating: '8.3',
      releasedDate: '2013-10-03T00:00:00.000Z'
    },
    {
      id: '590d0749f36d2804514b699d',
      title: 'The Tomorrow People',
      year: '2013–2014',
      releaseDate: '09 Oct 2013',
      genre: 'Action, Drama, Sci-Fi',
      plot: 'The story of several young people from around the world who represent the next stage in human evolution, possessing special powers, including the ability to teleport and communicate with each other telepathically. Together they work to defeat the forces of evil.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wLvXDUn5Xr9d112FhSWIqjS0Dtr.jpg',
      imdbRating: '7.3',
      releasedDate: '2013-10-09T00:00:00.000Z'
    },
    {
      id: '590ceb2ff36d2804514b573b',
      title: 'The Vampire Diaries',
      year: '2009–2017',
      releaseDate: '10 Sep 2009',
      genre: 'Drama, Fantasy, Horror',
      plot: 'The vampire brothers Damon and Stefan Salvatore, eternal adolescents, having been leading "normal" lives, hiding their bloodthirsty condition, for centuries, moving on before their non-aging is noticed. They are back in the Virginia town where they became vampires. Stefan is noble, denying himself blood to avoid killing, and tries to control his evil brother Damon, who promised to Stefan an eternity of misery. Stefan falls in love with schoolgirl Elena, who has an uncanny resemblance to the Salvatore brothers old love, Katherine; and whose best friend Bonnie',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/paubSqWUNgAgHFA0YpIxvcfvCg9.jpg',
      imdbRating: '7.8',
      releasedDate: '2009-09-10T00:00:00.000Z'
    },
    {
      id: '58fd16c4f36d285bbc130839',
      title: 'Under the Dome',
      year: '2013–2015',
      releaseDate: '24 Jun 2013',
      genre: 'Drama, Mystery, Sci-Fi',
      plot: 'An invisible and mysterious force field descends upon a small actual town of Chester\'s Mill, Maine, USA, trapping residents inside, cut off from the rest of civilization. The trapped townspeople must discover the secrets and purpose of the "dome" or "sphere" and its origins, while coming to learn more than they ever knew about each other and animals too.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/iFnCH70twxNDICQlDuCcoEt4Jma.jpg',
      imdbRating: '6.7',
      releasedDate: '2013-06-24T00:00:00.000Z'
    },
    {
      id: '58ffb275734d1d6c1a2cce36',
      title: 'iZombie',
      year: '2015–',
      releaseDate: '17 Mar 2015',
      genre: 'Comedy, Crime, Drama',
      plot: 'Liv Moore, a medical student, gets invited in a party which turns into a macabre zombie arena. Liv wakes up from the dead and becomes a zombie. For maintaining her humanity she must eat human brains so she began working in coroner\'s office to access brains. Eating a brain gives her memories and traits of that person. So she helps detective Clive Babineaux to solve the murder as a psychic.',
      poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/a4AlSl8P3qgPs6cZYgDGLuj4XKb.jpg',
      imdbRating: '8.0',
      releasedDate: '2015-03-17T01:00:00.000Z'
    }
  ];
  sortingCriteria = '';
  isDescending = '';

  constructor() {
  }

  ngOnInit() {
  }

  handleSortingCriteriaChange(criteriaData) {
    this.sortingCriteria = criteriaData.criteria;
    this.isDescending = criteriaData.isDescending;
  }
}
