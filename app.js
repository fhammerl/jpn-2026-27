const TRIP = {
  resortPlans: [
    {
      name: "Christmas / New Year",
      dates: "Wed 23 Dec 2026 → Thu 7 Jan 2027 · 14 nights",
      priceNote:
        "Compared with mid-January: flights are typically 35–60% higher, and hotels 50–100% higher.",
      flightPrice: "Flights for two: approx. CHF 2,800–4,200 return (estimate)",
      picks: [
        {
          rank: "Top 1",
          name: "Rusutsu",
          hotelKey: "rusutsu",
          reason: "Best snow bet and good lift infrastructure; expensive holiday lodging.",
          detail: "Cold Hokkaido powder · queues usually better than Niseko",
          description:
            "The strongest Christmas-period choice if the priority is cold, dry snow rather than village life. Rusutsu is large enough to occupy the trip, but the limited resort lodging makes this the most availability-sensitive option.",
          fit: "Best when snow quality comes first and the budget can absorb peak-season prices.",
          stats: {
            height: "400–994 m",
            difficulty: "Intermediate-friendly",
            pistes: "Very good grooming",
            snow: "Cold, dry Hokkaido powder; resort cites ~14 m a season",
            transfer: "CTS airport · ~2–2.5 h by bus",
            touristy: "International, but less hectic than Niseko; East No. 2 gondola queues at peak mornings",
            offpiste: "★★★★☆ · designated trees and gates; beyond gates is uncontrolled",
          },
        },
        {
          rank: "Top 2",
          name: "Niseko United",
          hotelKey: "niseko",
          reason: "The second-best snow bet for late December, and the easiest resort to run a two-week trip from — at a steep holiday price.",
          detail: "Excellent powder · premium lodging · likely queues",
          description:
            "Ranked here on snow, not convenience: coastal south-west Hokkaido has the most dependable late-December base in Japan, and Niseko is one of very few Japanese resorts with enough terrain variety to genuinely fill two weeks. The cost is real — Christmas/New Year is exactly when its popularity shows up in prices, availability and lift queues, so book early or not at all.",
          fit: "Best when snow reliability and easy logistics outweigh price and crowds.",
          stats: {
            height: "260–1,200 m lift-served · 1,308 m peak",
            difficulty: "Beginner to advanced; deep, not steep in-bounds",
            pistes: "Good, broad groomed network",
            snow: "Excellent dry powder, but upper chairs are often on wind-hold",
            transfer: "CTS airport · ~2–2.5 h by bus",
            touristy: "Very international and busy",
            offpiste: "★★★★★ · Japan’s most developed gate system; beyond the gates is uncontrolled backcountry",
          },
        },
        {
          rank: "Honshu alternative",
          name: "Hakuba Valley",
          hotelKey: "hakuba",
          reason: "The most variety and the best accommodation flexibility for two weeks.",
          detail: "Most variety · but the weakest snow odds of this window",
          description:
            "A practical two-week base with several distinct ski areas, more independent hotels and apartments, and a broader choice of restaurants. Be honest about the trade-off: Nagano sits at 36–37°N versus Hokkaido’s 42–44°N, and Honshu’s early-season snow is notably less reliable than Hokkaido’s. Late December is the weakest part of the Hakuba season, so this rank is earned on variety and availability, not on snow.",
          fit: "Best when variety, accommodation choice and village life matter more than guaranteed snow.",
          stats: {
            height: "~760–1,831 m lift-served (Happo-One)",
            difficulty: "Intermediate to advanced",
            pistes: "Good, varied grooming",
            snow: "Abundant, sometimes heavier",
            transfer: "HND/NRT · ~4 h by Shinkansen + bus",
            touristy: "Very international; queues vary by valley",
            offpiste: "★★★★☆ · resort-specific gates; backcountry beyond boundaries",
          },
        },
        {
          rank: "Small-resort plan",
          name: "Nozawa Onsen + Madarao/Tangram",
          hotelKey: "honshu-combo",
          reason: "Village, onsen and larger terrain in Nozawa, with quieter tree days nearby.",
          detail: "Better value · late-December snow slightly less certain",
          description:
            "Split the stay between Nozawa’s traditional village and the nearby Madarao/Tangram area. This avoids asking one small resort to carry fourteen nights and gives the trip a slower, more local feel.",
          fit: "Best value-oriented plan, with slightly more snow-risk in late December.",
          stats: {
            height: "Nozawa 565–1,650 m · Madarao 910–1,350 m · Tangram 800–1,320 m",
            difficulty: "Intermediate, with tree terrain",
            pistes: "Good in Nozawa; more natural snow nearby",
            snow: "Heavy Sea-of-Japan snow",
            transfer: "HND/NRT · ~4 h by Shinkansen + bus",
            touristy: "Nozawa popular; Madarao quieter",
            offpiste: "★★★★☆ · strongest on Madarao’s designated tree terrain",
          },
        },
        {
          rank: "Additional option",
          name: "Furano",
          hotelKey: "furano",
          reason: "Colder and quieter, but the riskiest snow bet of this window.",
          detail: "Late-December base is the least certain · longer transfer",
          description:
            "Last on this list for a reason. Furano sits inland in Central Hokkaido, which is a bigger early-season gamble than the coastal resorts — and its own peak powder window only really starts in early January. It gets ~8–9 m against Rusutsu’s ~14 m. Worth holding as a calm, uncrowded fallback if the bigger Hokkaido resorts are sold out.",
          fit: "A fallback for availability and quiet, not a late-December snow play.",
          stats: {
            height: "235–1,074 m",
            difficulty: "Intermediate overall",
            pistes: "Excellent quality, but few blue runs — repetitive over two weeks",
            snow: "Cold and dry, but ~8–9 m — less volume than the coastal resorts",
            transfer: "CTS airport · ~2.5–3 h by bus",
            touristy: "Lower international pressure",
            offpiste: "★★★☆☆ · tolerated by patrol, but no formal gate system",
          },
        },
      ],
    },
    {
      name: "Mid-January",
      dates: "Thu 14 Jan → Fri 29 Jan 2027 · 14 nights",
      recommended: true,
      priceNote:
        "Reference window: flights are typically 25–40% lower, and hotels 35–50% lower than Christmas/New Year. It also finishes before Lunar New Year (6 Feb 2027), which is the other big Asian demand spike.",
      flightPrice: "Flights for two: approx. CHF 1,800–2,800 return (estimate)",
      picks: [
        {
          rank: "Top 1",
          name: "Rusutsu",
          hotelKey: "rusutsu",
          reason: "Strongest combination of mature base, cold powder and manageable crowds.",
          detail: "Best powder-focused choice",
          description:
            "By mid-January the base should be established and the cold Hokkaido pattern is at its most attractive. Rusutsu offers enough lift-served terrain for the full stay without Niseko’s same level of international pressure.",
          fit: "Best overall if powder and snow reliability are the main decision criteria.",
          stats: {
            height: "400–994 m",
            difficulty: "Intermediate-friendly",
            pistes: "Very good grooming",
            snow: "Cold, dry Hokkaido powder; resort cites ~14 m a season",
            transfer: "CTS airport · ~2–2.5 h by bus",
            touristy: "Quieter than Niseko, but January is peak Australian holiday month",
            offpiste: "★★★★☆ · designated trees and gates; backcountry is uncontrolled",
          },
        },
        {
          rank: "Top 2",
          name: "Nozawa Onsen",
          hotelKey: "nozawa",
          reason: "Best balance of snow, village atmosphere, onsen and accommodation value.",
          detail: "Dosojin fire festival falls on 15 Jan — the arrival day",
          description:
            "A more rounded trip than a pure resort stay: ride during the day, use the public baths, and stay in a proper Japanese mountain village. The ski area is smaller, so it works especially well with a few nearby days.",
          fit: "Best overall experience and value outside Hokkaido; book early around the festival.",
          stats: {
            height: "565–1,650 m",
            difficulty: "Intermediate overall",
            pistes: "Good, long groomed runs",
            snow: "Reliable, often heavier than Hokkaido",
            transfer: "HND/NRT · ~4 h by Shinkansen + bus",
            touristy: "Popular but still authentically local",
            offpiste: "★★★☆☆ · more limited and resort-policy dependent",
          },
        },
        {
          rank: "Small-resort plan",
          name: "Madarao + Tangram, then Nozawa",
          hotelKey: "honshu-combo",
          reason: "Compact powder days followed by a larger village and more terrain.",
          detail: "Best value-oriented two-week structure",
          description:
            "Use Madarao and Tangram for a quiet, tree-focused opening, then move to Nozawa for the second half. The areas are close enough to combine without turning the holiday into a long-distance road trip.",
          fit: "Best if a quieter first half and onsen-focused second half sound appealing.",
          stats: {
            height: "Madarao 910–1,350 m · Tangram 800–1,320 m · Nozawa 565–1,650 m",
            difficulty: "Intermediate to advanced trees",
            pistes: "Less manicured; excellent natural lines",
            snow: "Very snowy, sometimes wet or stormy",
            transfer: "HND/NRT · ~4 h by Shinkansen + bus",
            touristy: "Low-key and less international",
            offpiste: "★★★★☆ · designated tree areas, with stricter areas at Tangram",
          },
        },
        {
          rank: "Additional option",
          name: "Furano",
          hotelKey: "furano",
          reason: "Cold, dry snow and lower crowds, with better mid-January conditions than the holiday period.",
          detail: "Smaller and less varied than Rusutsu; longer transfer from CTS",
          description:
            "Furano becomes a more credible mid-January choice because the snow base is more established and the lower crowd level is easier to enjoy. It still does not outrank Rusutsu or Nozawa for a two-week trip because the terrain and village are more limited.",
          fit: "Good for a quieter Hokkaido trip, but not the strongest all-round two-week base.",
          stats: {
            height: "235–1,074 m",
            difficulty: "Intermediate overall",
            pistes: "Excellent quality, but few blue runs — repetitive over two weeks",
            snow: "Very cold and dry; ~8–9 m, peak powder window is Jan–Feb",
            transfer: "CTS airport · ~2.5–3 h by bus",
            touristy: "Quieter than Niseko and Rusutsu",
            offpiste: "★★★☆☆ · tolerated by patrol, but no formal gate system",
          },
        },
        {
          rank: "Additional option",
          name: "Niseko United",
          hotelKey: "niseko",
          reason: "Excellent snow and the widest international support network, at a clear premium.",
          detail: "Better after New Year · still busier and pricier than Rusutsu",
          description:
            "Mid-January removes some of the holiday pressure, making Niseko more reasonable than in the first window. It still usually costs more and feels busier than Rusutsu, but the terrain, services and après-ski options are hard to beat.",
          fit: "Good if convenience, restaurants and a social scene outweigh the extra cost.",
          stats: {
            height: "260–1,200 m lift-served · 1,308 m peak",
            difficulty: "Beginner to advanced; deep, not steep in-bounds",
            pistes: "Good, broad groomed network",
            snow: "Excellent dry powder, but upper chairs are often on wind-hold",
            transfer: "CTS airport · ~2–2.5 h by bus",
            touristy: "Very international; queues vary by sector",
            offpiste: "★★★★★ · Japan’s most developed gate system; beyond the gates is uncontrolled backcountry",
          },
        },
      ],
    },
  ],
};

const resortPage = {};

const HOTEL_OPTIONS = {
  "Christmas / New Year": {
    rusutsu: [
      {
        name: "Rusutsu Resort Hotel",
        area: "Rusutsu",
        price: "CHF 280–450 / night · CHF 3,920–6,300 total",
        note: "Onsen and pool; convenient but premium Christmas pricing.",
        link: "https://rusutsu.com/en/",
      },
      {
        name: "The Westin Rusutsu Resort",
        area: "Rusutsu",
        price: "CHF 350–550 / night · CHF 4,900–7,700 total",
        note: "Excellent ski access and facilities; more expensive than the target range.",
        link: "https://www.marriott.com/en-us/hotels/ctswi-the-westin-rusutsu-resort/overview/",
      },
    ],
    hakuba: [
      {
        name: "Mominoki Hotel",
        area: "Hakuba",
        price: "CHF 180–300 / night · CHF 2,520–4,200 total",
        note: "Onsen and sauna; practical central base near Happo.",
        link: "https://mominokihotel.com/",
      },
      {
        name: "Sierra Resort Hakuba",
        area: "Hakuba / Iwatake",
        price: "CHF 150–260 / night · CHF 2,100–3,640 total",
        note: "Onsen and quieter setting; shuttle dependence is the trade-off.",
        link: "https://www.hotel-sierra.com/",
      },
    ],
    "honshu-combo": [
      {
        name: "Ryokan Sakaya",
        area: "Nozawa Onsen",
        price: "CHF 180–300 / night · CHF 2,520–4,200 total",
        note: "Classic onsen ryokan; likely to sell out over the holidays.",
        link: "https://www.sakaya.com/",
      },
      {
        name: "Madarao Kogen Hotel",
        area: "Madarao",
        price: "CHF 120–220 / night · CHF 1,680–3,080 total",
        note: "Ski-in/ski-out and hot springs; useful for the smaller-resort half.",
        link: "https://www.madarao.jp/hotel/",
      },
    ],
    furano: [
      {
        name: "Furano Prince Hotel",
        area: "Furano",
        price: "CHF 150–260 / night · CHF 2,100–3,640 total",
        note: "Convenient ski access and reliable facilities; holiday availability is limited.",
        link: "https://www.princehotels.com/furano/",
      },
      {
        name: "Furano Natulux Hotel",
        area: "Furano town",
        price: "CHF 100–180 / night · CHF 1,400–2,520 total",
        note: "Better-value town base; requires a short transfer to the lifts.",
        link: "https://www.furano-natulux.com/",
      },
    ],
    niseko: [
      {
        name: "Hotel Niseko Alpen",
        area: "Hirafu",
        price: "CHF 260–450 / night · CHF 3,640–6,300 total",
        note: "Central, with onsen and pool; peak dates are expensive.",
        link: "https://www.hotel-nisekoalpen.com/",
      },
      {
        name: "The Freshwater",
        area: "Hirafu",
        price: "CHF 220–380 / night · CHF 3,080–5,320 total",
        note: "Apartment-style rooms with kitchens; good for controlling food costs.",
        link: "https://www.thefreshwater.com/",
      },
    ],
  },
  "Mid-January": {
    rusutsu: [
      {
        name: "Rusutsu Resort Hotel",
        area: "Rusutsu",
        price: "CHF 190–320 / night · CHF 2,660–4,480 total",
        note: "Onsen and pool; much better value after New Year, subject to inventory.",
        link: "https://rusutsu.com/en/",
      },
      {
        name: "The Westin Rusutsu Resort",
        area: "Rusutsu",
        price: "CHF 260–420 / night · CHF 3,640–5,880 total",
        note: "Strong ski access and facilities; premium but sometimes competitive mid-season.",
        link: "https://www.marriott.com/en-us/hotels/ctswi-the-westin-rusutsu-resort/overview/",
      },
    ],
    nozawa: [
      {
        name: "Ryokan Sakaya",
        area: "Nozawa Onsen",
        price: "CHF 150–260 / night · CHF 2,100–3,640 total",
        note: "Traditional onsen ryokan; excellent fit if rooms remain around the festival.",
        link: "https://www.sakaya.com/",
      },
      {
        name: "Wafu Pension Miyazawa",
        area: "Nozawa Onsen",
        price: "CHF 110–190 / night · CHF 1,540–2,660 total",
        note: "Smaller, more affordable village option; check room and bath details directly.",
        link: "https://www.nozawaonsen.com/",
      },
    ],
    "honshu-combo": [
      {
        name: "Madarao Kogen Hotel",
        area: "Madarao",
        price: "CHF 100–180 / night · CHF 1,400–2,520 total",
        note: "Ski-in/ski-out and hot springs; good base for the quieter opening.",
        link: "https://www.madarao.jp/hotel/",
      },
      {
        name: "Hotel Tangram",
        area: "Tangram",
        price: "CHF 110–200 / night · CHF 1,540–2,800 total",
        note: "Ski-in/ski-out, onsen and pool; limited evening options.",
        link: "https://www.tangram.jp/english/",
      },
    ],
    furano: [
      {
        name: "Furano Prince Hotel",
        area: "Furano",
        price: "CHF 120–210 / night · CHF 1,680–2,940 total",
        note: "Convenient ski access and good mid-January snow positioning.",
        link: "https://www.princehotels.com/furano/",
      },
      {
        name: "Furano Natulux Hotel",
        area: "Furano town",
        price: "CHF 85–150 / night · CHF 1,190–2,100 total",
        note: "Value town base with baths; short transfer to the ski area.",
        link: "https://www.furano-natulux.com/",
      },
    ],
    niseko: [
      {
        name: "Hotel Niseko Alpen",
        area: "Hirafu",
        price: "CHF 180–310 / night · CHF 2,520–4,340 total",
        note: "Central onsen and pool; still priced above Rusutsu or Furano.",
        link: "https://www.hotel-nisekoalpen.com/",
      },
      {
        name: "The Freshwater",
        area: "Hirafu",
        price: "CHF 160–280 / night · CHF 2,240–3,920 total",
        note: "Apartment-style rooms and kitchens; useful for a longer stay.",
        link: "https://www.thefreshwater.com/",
      },
    ],
  },
};

const RESORT_IMAGES = {
  rusutsu:
    "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80",
  niseko:
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",
  hakuba:
    "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1200&q=80",
  "honshu-combo":
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
  furano:
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80",
  nozawa:
    "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&w=1200&q=80",
};

const HOTEL_IMAGES = {
  "Rusutsu Resort Hotel":
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80",
  "The Westin Rusutsu Resort":
    "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=500&q=80",
  "Mominoki Hotel":
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=500&q=80",
  "Sierra Resort Hakuba":
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=500&q=80",
  "Ryokan Sakaya":
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=500&q=80",
  "Madarao Kogen Hotel":
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=500&q=80",
  "Hotel Tangram":
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=500&q=80",
  "Furano Prince Hotel":
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=500&q=80",
  "Furano Natulux Hotel":
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80",
  "Hotel Niseko Alpen":
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=500&q=80",
  "The Freshwater":
    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=500&q=80",
  "Wafu Pension Miyazawa":
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=500&q=80",
};

const COST_SUMMARY = {
  "Christmas / New Year": {
    flights: "CHF 2,800–4,200",
    liftPasses: "CHF 1,000–1,500",
    flightRange: [2800, 4200],
    liftPassRange: [1000, 1500],
  },
  "Mid-January": {
    flights: "CHF 1,800–2,800",
    liftPasses: "CHF 1,000–1,500",
    flightRange: [1800, 2800],
    liftPassRange: [1000, 1500],
  },
};

const RESORT_RATINGS = {
  Rusutsu: { difficulty: 3, snow: 5, piste: 5, transfer: 4, size: 4, sizeLabel: "Large resort" },
  "Niseko United": { difficulty: 4, snow: 5, piste: 4, transfer: 4, size: 5, sizeLabel: "Large interconnected area" },
  "Hakuba Valley": { difficulty: 4, snow: 3, piste: 4, transfer: 3, size: 5, sizeLabel: "Very large valley network" },
  "Nozawa Onsen + Madarao/Tangram": { difficulty: 3, snow: 4, piste: 4, transfer: 3, size: 4, sizeLabel: "Medium areas combined" },
  "Nozawa Onsen": { difficulty: 3, snow: 4, piste: 4, transfer: 3, size: 3, sizeLabel: "Medium-sized single area" },
  "Madarao + Tangram, then Nozawa": { difficulty: 4, snow: 4, piste: 3, transfer: 3, size: 4, sizeLabel: "Two smaller areas plus Nozawa" },
  Furano: { difficulty: 3, snow: 4, piste: 5, transfer: 3, size: 3, sizeLabel: "Medium-sized resort" },
};

function parseHotelTotal(price) {
  const match = price.match(/CHF\s+([\d,]+)–([\d,]+)\s+total/);
  if (!match) return [0, 0];
  return match.slice(1).map((value) => Number(value.replace(/,/g, "")));
}

function formatChfRange(range) {
  return `CHF ${range[0].toLocaleString("en-CH")}–${range[1].toLocaleString("en-CH")}`;
}

function ratingStars(score) {
  return `${"★".repeat(score)}${"☆".repeat(5 - score)}`;
}

function priceRating(range, planName) {
  const midpoint = (range[0] + range[1]) / 2;
  const thresholds =
    planName === "Christmas / New Year"
      ? { low: 8000, high: 11000 }
      : { low: 6000, high: 8500 };

  if (midpoint <= thresholds.low) return { className: "price-low", label: "Good value" };
  if (midpoint <= thresholds.high) return { className: "price-middle", label: "Mid-range" };
  return { className: "price-high", label: "Very expensive" };
}

function renderResortPlans() {
  const plans = TRIP.resortPlans
    .map(
      (plan) => {
        const page = resortPage[plan.name] || 0;
        const pick = plan.picks[page];
        const hotels = HOTEL_OPTIONS[plan.name][pick.hotelKey];
        const costs = COST_SUMMARY[plan.name];
        const hotelTotals = hotels.map((hotel) => parseHotelTotal(hotel.price));
        const finalTotals = hotelTotals.map((hotelTotal) => [
          costs.flightRange[0] + costs.liftPassRange[0] + hotelTotal[0],
          costs.flightRange[1] + costs.liftPassRange[1] + hotelTotal[1],
        ]);
        const ratings = RESORT_RATINGS[pick.name];

        return `
        <article class="resort-plan ${plan.recommended ? "recommended" : ""}">
          <div class="resort-plan-heading">
            <div>
              <span class="date-option-label">${plan.recommended ? "Recommended" : "Alternative"}</span>
              <h3>${plan.name}</h3>
            </div>
            <span>${plan.dates}</span>
          </div>
          <div class="resort-pager">
            <button type="button" data-resort-page="${plan.name}" data-direction="-1" aria-label="Previous ${plan.name} option">←</button>
            <strong class="resort-pager-name">
              <span>${pick.name} (${plan.name === "Mid-January" ? "Jan" : "Christmas"})</span>
              <small>${pick.rank} · ${page + 1} / ${plan.picks.length}</small>
            </strong>
            <button type="button" data-resort-page="${plan.name}" data-direction="1" aria-label="Next ${plan.name} option">→</button>
          </div>
          <p class="resort-price-note">${plan.priceNote}</p>
          <p class="flight-price">${plan.flightPrice} from Zurich, economy, usually with one stop.</p>
          <div class="resort-offer">
            <img class="resort-image" src="${RESORT_IMAGES[pick.hotelKey]}" alt="Representative Japan town view for ${pick.name}" loading="lazy" />
            <h4>${pick.name}</h4>
            <p class="resort-offer-reason">${pick.reason}</p>
            <p class="resort-offer-description">${pick.description}</p>
            <div class="resort-offer-fit">
              <strong>Why this fits</strong>
              <span>${pick.fit}</span>
            </div>
            <div class="resort-stats">
              <div><strong>Height</strong><span>${pick.stats.height}</span></div>
              <div><strong>Difficulty <span class="rating-stars" aria-label="${ratings.difficulty} out of 5 stars">${ratingStars(ratings.difficulty)}</span></strong><span>${pick.stats.difficulty}</span></div>
              <div><strong>On-piste <span class="rating-stars" aria-label="${ratings.piste} out of 5 stars">${ratingStars(ratings.piste)}</span></strong><span>${pick.stats.pistes}</span></div>
              <div><strong>Snow quality <span class="rating-stars" aria-label="${ratings.snow} out of 5 stars">${ratingStars(ratings.snow)}</span></strong><span>${pick.stats.snow}</span></div>
              <div><strong>Size <span class="rating-stars" aria-label="${ratings.size} out of 5 stars">${ratingStars(ratings.size)}</span></strong><span>${ratings.sizeLabel}</span></div>
              <div><strong>🚐 Airport transfer <span class="rating-stars" aria-label="${ratings.transfer} out of 5 stars">${ratingStars(ratings.transfer)}</span></strong><span>${pick.stats.transfer}</span></div>
              <div><strong>Touristy</strong><span>${pick.stats.touristy}</span></div>
              <div><strong>Off-piste</strong><span>${pick.stats.offpiste}</span></div>
            </div>
            <small>${pick.detail}</small>
          </div>
          <div class="hotel-ideas">
            <div class="hotel-ideas-heading">
              <strong>Two hotel ideas for this window</strong>
              <span>14-night planning estimates · room for two</span>
            </div>
            ${hotels
              .map(
                (hotel) => `
                  <a class="hotel-idea" href="${hotel.link}" target="_blank" rel="noreferrer">
                    <img class="hotel-image" src="${HOTEL_IMAGES[hotel.name]}" alt="" loading="lazy" />
                    <div>
                      <strong>${hotel.name}</strong>
                      <span>${hotel.area}</span>
                    </div>
                    <p>${hotel.price}</p>
                    <small>${hotel.note} ↗</small>
                  </a>
                `,
              )
              .join("")}
          </div>
          <div class="card-cost-summary">
            <div class="card-cost-heading">
              <strong>Estimated total for two</strong>
              <span>14 nights · planning range</span>
            </div>
            <div class="cost-table" role="table" aria-label="Estimated costs">
              <div class="cost-table-row cost-table-header" role="row">
                <strong role="columnheader">Item</strong>
                <strong role="columnheader">Estimate</strong>
              </div>
              <div class="cost-table-row" role="row">
                <span role="rowheader">Flights</span>
                <strong role="cell">${costs.flights}</strong>
              </div>
              <div class="cost-table-row" role="row">
                <span role="rowheader">Ski passes</span>
                <strong role="cell">${costs.liftPasses}</strong>
              </div>
              <div class="cost-table-row cost-table-subhead" role="row">
                <strong role="rowheader">Final with either hotel</strong>
                <span role="cell">hotel + flights + passes</span>
              </div>
              ${hotels
                .map(
                  (hotel, index) => `
                    <div class="cost-table-row cost-table-total" role="row">
                      <span role="rowheader">${hotel.name}</span>
                      <strong role="cell">
                        ${formatChfRange(finalTotals[index])}
                        <span class="price-rating ${priceRating(finalTotals[index], plan.name).className}">
                          ${priceRating(finalTotals[index], plan.name).label}
                        </span>
                      </strong>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <small>Food, trains, airport transfers, insurance and extras not included.</small>
          </div>
        </article>
        `;
      },
    )
    .join("");

  document.querySelector("#resort-plans").innerHTML = plans;
}

function bindEvents() {
  document.querySelector("#resort-plans").addEventListener("click", (event) => {
    const button = event.target.closest("[data-resort-page]");
    if (!button) return;

    const planName = button.dataset.resortPage;
    const plan = TRIP.resortPlans.find((item) => item.name === planName);
    const current = resortPage[planName] || 0;
    resortPage[planName] =
      (current + Number(button.dataset.direction) + plan.picks.length) %
      plan.picks.length;
    renderResortPlans();
  });

}

function initialize() {
  renderResortPlans();
  bindEvents();
}

initialize();
