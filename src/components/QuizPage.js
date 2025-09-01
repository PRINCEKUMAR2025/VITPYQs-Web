import React, { useState } from "react";

const quizQuestions = [
  {
    question: "In the Greek word root of Ecology, Oikos refers to",
    options: ["household", "study", "preservation", "environment"],
    answer: 0,
    explanation: "Oikos means 'household' in Greek, forming the root of the word 'ecology'."
  },
  {
    question: "In the Greek word root of Ecology, logos refers to",
    options: ["study", "environment", "preservation", "household"],
    answer: 0,
    explanation: "Logos means 'study' or 'discourse' in Greek."
  },
  {
    question: "Which of these is not a step in natural selection?",
    options: ["survival of the fittest", "struggle for existence", "underpopulation", "variation"],
    answer: 2,
    explanation: "'Underpopulation' is not a concept involved in natural selection."
  },
  {
    question: "\"Enquiry into plants\" is a book written by",
    options: ["Humboldt", "Malthus", "Linnaeus", "Theophrastus"],
    answer: 3,
    explanation: "Theophrastus authored the book 'Enquiry into Plants'."
  },
  {
    question: "Which of these is not a characteristic of fitness?",
    options: [
      "Fitness should be measured across several generations",
      "Higher reproductive rate means higher fitness",
      "Fitness is species- specific",
      "Fitness id environment- specific"
    ],
    answer: 2,
    explanation: "Fitness is environment-specific, not species-specific."
  },
  {
    question: "Ecology is the scientific study of interactions among organisms and their_____.",
    options: ["population", "niche", "environment", "habitat"],
    answer: 2,
    explanation: "Ecology studies the relationship between organisms and their environment."
  },
  {
    question: "Which of these is not a characteristic of fitness?",
    options: [
      "Fitness is environment-specific.",
      "Fitness is species-specific.",
      "Fitness works on traits such as size and speed.",
      "Fitness should be measured across several generations."
    ],
    answer: 1,
    explanation: "Fitness is not species-specific; it depends on the environment."
  },
  {
    question: "Which of these is not a kind of selection?",
    options: ["directional", "stochastic", "disruptive", "stabilising"],
    answer: 1,
    explanation: "Stochastic means random and is not a selection type."
  },
  {
    question: "Ecology is the scientific study of _______that determine the distribution and abundance of organisms.",
    options: ["interactions", "habitat", "statics", "dynamics"],
    answer: 0,
    explanation: "Ecology focuses on interactions among organisms and their environment."
  },
  {
    question: "Who amongst these is considered the father of Biogeography?",
    options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
    answer: 3,
    explanation: "Alexander von Humboldt is known as the father of Biogeography."
  },
  {
    question: "\"The diversity that exists within an ecosystem\" is",
    options: ["gamma biodiversity", "alpha biodiversity", "beta biodiversity", "delta biodiversity"],
    answer: 1,
    explanation: "Alpha biodiversity refers to species diversity within an ecosystem."
  },
  {
    question: "Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are _____",
    options: ["perfect", "imperfect", "stable", "unstable"],
    answer: 2,
    explanation: "Hierarchical structures are stable and efficient for organization."
  },
  {
    question: "For more biodiversity, the level of disturbance should be",
    options: ["less", "none of these", "intermediate", "more"],
    answer: 2,
    explanation: "Intermediate disturbance supports maximum biodiversity."
  },
  {
    question: "The emergent principle can be stated as",
    options: ["none of these", "whole > sum of parts", "whole < sum of parts", "whole = sum of parts"],
    answer: 1,
    explanation: "Emergence means the whole exhibits properties greater than the sum of parts."
  },
  {
    question: "The mitochondrion is a/an",
    options: ["sub-cellular organelle", "cell", "tissue", "organ"],
    answer: 0,
    explanation: "Mitochondria are organelles within cells that produce energy."
  },
  {
    question: "\"Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such species\" is a definition of",
    options: ["cells", "species", "biomes", "ecosystems"],
    answer: 1,
    explanation: "This is the biological definition of a species."
  },
  {
    question: "There is more biodiversity in areas with",
    options: [
      "less competition, less predation",
      "more competition, less predation",
      "less competition, more predation",
      "more competition, more predation"
    ],
    answer: 1,
    explanation: "Moderate competition and low predation often support higher biodiversity."
  },
  {
    question: "The hierarchical system was given by",
    options: ["watson", "simon", "humboldt", "hutchinson"],
    answer: 1,
    explanation: "Herbert A. Simon proposed the concept of hierarchical systems."
  },
  {
    question: "The laboratory approach to ecology uses",
    options: ["observations", "experiments", "models", "equations"],
    answer: 1,
    explanation: "Ecological experiments are conducted in controlled lab environments."
  },
  {
    question: "\"The diversity that exists among different geographies\" are",
    options: ["delta biodiversity", "gamma biodiversity", "beta biodiversity", "alpha biodiversity"],
    answer: 2,
    explanation: "Beta biodiversity refers to differences in species composition between ecosystems or regions."
  },
  {
    question: "The interaction between exotic shrubs and trees through the action of seed predators is an example of",
    options: [
      "infraspecific competition",
      "apparent competition",
      "harmonious competition",
      "disguised competition"
    ],
    answer: 1,
    explanation: "Apparent competition occurs when two species are preyed upon by the same predator."
  },
  {
    question: "Egrets with buffaloes are an example of",
    options: ["colony", "commensalism", "protocooperation", "allelopathy"],
    answer: 1,
    explanation: "Commensalism is when one benefits and the other is unaffected."
  },
  {
    question: "I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called",
    options: ["foraging", "allo grooming", "auto grooming", "tick hunting"],
    answer: 1,
    explanation: "Allo grooming is grooming another individual."
  },
  {
    question: "Hamilton's rule can be stated as",
    options: ["rB + C = 0", "rB = C", "rB > C", "rB < C"],
    answer: 2,
    explanation: "Hamilton's rule: altruism is favored if rB > C."
  },
  {
    question: "I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called",
    options: ["auto grooming", "allo grooming", "foraging", "tick hunting"],
    answer: 1,
    explanation: "Again, grooming another is allo grooming."
  },
  {
    question: "Trampling of grass due to the movement of animals is an example of",
    options: ["mutualism", "protocooperation", "ammensalism", "commensalism"],
    answer: 2,
    explanation: "Ammensalism is where one is harmed and the other unaffected."
  },
  {
    question: "Birds on giraffe are an example of",
    options: ["colony", "commensalism", "protocooperation", "allelopathy"],
    answer: 1,
    explanation: "This is an example of commensalism."
  },
  {
    question: "An inventory of behaviours exhibited by an animal during a behaviour exercise is called",
    options: ["animalogram", "behaviourogram", "ethogram", "ecogram"],
    answer: 2,
    explanation: "An ethogram is a catalog of animal behaviors."
  },
  {
    question: "The scientific study of animal behaviour is called",
    options: ["prey- predator dynamics", "ecology", "ethology", "behaviourism"],
    answer: 2,
    explanation: "Ethology is the study of animal behavior in natural conditions."
  },
  {
    question: "Harmonious competition occurs where",
    options: [
      "at least one participant is unharmed",
      "at least one participant is benefited",
      "both participants are unharmed",
      "both participants are benefited"
    ],
    answer: 0,
    explanation: "In harmonious competition, one is harmed, but the other is not significantly affected."
  },
  {
    question: "Glacial lakes are typical examples of",
    options: ["eutrophic lakes", "hypereutrophic lakes", "oligotrophic lakes", "mesotrophic lakes"],
    answer: 2,
    explanation: "Glacial lakes are usually oligotrophic, meaning they have low nutrient levels and high oxygen content."
  },
  {
    question: "Consider the food chain grass → grasshopper → frog → snake → hawk. In the food chain",
    options: ["hawk is producer", "hawk is consumer and carnivore", "hawk is decomposer", "hawk is consumer and herbivore"],
    answer: 1,
    explanation: "The hawk is a top-level consumer and a carnivore in this food chain."
  },
  {
    question: "If we all become vegetarians, we'll be able to support our large populations. This can be explained through",
    options: ["10% rule", "1% rule", "trophic cascades", "biodiversity"],
    answer: 0,
    explanation: "The 10% rule explains that energy decreases by about 90% at each trophic level, so eating at lower levels supports more people."
  },
  {
    question: "Tree → frugivorous birds → hawk represents",
    options: ["upright pyramid of numbers", "inverted pyramid of numbers", "spindle pyramid of numbers", "dumb-bell pyramid of numbers"],
    answer: 1,
    explanation: "This is an inverted pyramid because the number of producers (trees) is smaller than the number of birds or predators."
  },
  {
    question: "At the compensation point",
    options: ["photosynthesis < respiration", "photosynthesis = respiration", "photosynthesis > respiration", "photosynthesis = 0"],
    answer: 1,
    explanation: "At the compensation point, the rate of photosynthesis exactly equals the rate of respiration."
  },
  {
    question: "Trees → birds → parasites → hyperparasites represent",
    options: ["inverted pyramid of numbers", "spindle pyramid of numbers", "upright pyramid of numbers", "dumb-bell pyramid of numbers"],
    answer: 3,
    explanation: "This forms a dumb-bell shaped pyramid due to a dip in the middle trophic level (birds)."
  },
  {
    question: "Consider the food chain grass → grasshopper → frog → snake → hawk. As we move up the food chain,",
    options: ["available energy is zero everywhere", "available energy increases", "available energy decreases", "available energy remains same"],
    answer: 2,
    explanation: "Energy decreases at each trophic level due to loss as heat, in line with the 10% law."
  },
  {
    question: "Net Primary Productivity is given by",
    options: ["APAR / LUE", "APAR x LUE", "APAR + LUE", "APAR - LUE"],
    answer: 1,
    explanation: "Net Primary Productivity = APAR (Absorbed Photosynthetically Active Radiation) x LUE (Light Use Efficiency)."
  },
  {
    question: "Consider the food chain grass → grasshopper → frog → snake → hawk. In this food chain",
    options: ["frog is consumer and herbivore", "frog is consumer and carnivore", "frog is decomposer", "frog is producer"],
    answer: 1,
    explanation: "The frog feeds on grasshoppers and is thus a carnivorous secondary consumer."
  },
  {
    question: "Consider the food chain grass → grasshopper → frog → snake → hawk. In this food chain",
    options: [
      "more numbers of hawks than grasshoppers can be supported",
      "more numbers of grasshoppers than hawks can be supported",
      "equal numbers of hawks and grasshoppers can be supported",
      "none of these"
    ],
    answer: 1,
    explanation: "Due to energy loss at each level, fewer organisms can be supported at higher trophic levels."
  },
   {
    question: "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
    options: ["multistage sampling", "stratified sampling", "systematic sampling", "simple random sampling"],
    answer: 3,
    explanation: "In simple random sampling, every possible combination has an equal chance of being selected."
  },
  {
    question: "Pan traps are used for sampling",
    options: ["bees", "pollinator insects", "butterflies", "non-pollinator insects"],
    answer: 1,
    explanation: "Pan traps are commonly used to sample a wide variety of pollinator insects, including bees and flies."
  },
  {
    question: "The minimum replacement level fertility for a population to grow should be greater than",
    options: ["1", "4", "2", "3"],
    answer: 2,
    explanation: "Replacement level fertility is generally around 2.1 children per woman to sustain population growth."
  },
  {
    question: "The logistic growth equation, when plotted, appears",
    options: ["J shaped", "I shaped", "S shaped", "O shaped"],
    answer: 2,
    explanation: "Logistic growth results in an S-shaped curve due to the influence of carrying capacity."
  },
  {
    question: "______ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start",
    options: ["stratified sampling", "systematic sampling", "multistage sampling", "simple random sampling"],
    answer: 1,
    explanation: "Systematic sampling involves selecting every kth item from a list, starting at a random point."
  },
  {
    question: "____ is how close the measured values are to the correct value",
    options: ["variance", "bias", "accuracy", "precision"],
    answer: 2,
    explanation: "Accuracy refers to how close a measurement is to the true or accepted value."
  },
  {
    question: "Cover board surveys are typically used for sampling",
    options: ["carnivores", "herpetofauna", "fishes", "large mammals"],
    answer: 1,
    explanation: "Cover boards are used to sample herpetofauna like reptiles and amphibians which seek shelter under objects."
  },
  {
    question: "Which of these is true?",
    options: [
      "a or b",
      "physiological longevity < ecological longevity",
      "physiological longevity = ecological longevity",
      "physiological longevity > ecological longevity"
    ],
    answer: 3,
    explanation: "Physiological longevity (maximum lifespan) is generally greater than ecological longevity (lifespan under natural conditions)."
  },
  {
    question: "The juvenile mortality rate is the annual number of deaths of juveniles per",
    options: ["100 births", "100 live births", "1000 live births", "1000 births"],
    answer: 2,
    explanation: "Juvenile mortality rate is commonly expressed per 1000 live births."
  },
  {
    question: "Which of these is not a measure of absolute population density?",
    options: ["total count", "capture-recapture method", "removal method", "pelt count"],
    answer: 3,
    explanation: "Pelt count is an indirect method and not considered a measure of absolute population density."
  },
   {
    question: "Lithosere is an example of",
    options: ["hydrosere", "xerosere", "psammosere", "halosere"],
    answer: 1,
    explanation: "Lithosere refers to primary succession on bare rock surfaces, characteristic of xerosere."
  },
  {
    question: "Which of these is correct?",
    options: [
      "fundamental niche = realised niche",
      "fundamental niche > realised niche",
      "fundamental niche < realised niche",
      "a or b"
    ],
    answer: 1,
    explanation: "The fundamental niche is usually larger than the realised niche due to competition and other factors."
  },
  {
    question: "Which of these is not a characteristic of pioneer species?",
    options: [
      "ability to grow on bare rocks",
      "ability to tolerate extreme temperatures",
      "large size",
      "short life span"
    ],
    answer: 2,
    explanation: "Pioneer species typically have small size; large size is not characteristic."
  },
  {
    question: "Importance value can be written as",
    options: [
      "relative density X relative frequency + relative dominance",
      "relative density X relative frequency X relative dominance",
      "relative density + relative frequency X relative dominance",
      "relative density + relative frequency + relative dominance"
    ],
    answer: 3,
    explanation: "Importance value is the sum of relative density, relative frequency, and relative dominance."
  },
  {
    question: "Importance value varies from",
    options: ["0 to 100", "0 to 300", "0 to 50", "0 to 10"],
    answer: 1,
    explanation: "Since importance value sums three relative measures each up to 100, it ranges from 0 to 300."
  },
  {
    question: "A climax caused by wildfires is an example of",
    options: [
      "disclimax",
      "catastrophic climax",
      "edaphic climax",
      "climatic climax"
    ],
    answer: 1,
    explanation: "Wildfire-induced climax is a catastrophic climax caused by disturbance."
  },
  {
    question: "When compared to generalist species, specialist species have",
    options: [
      "none of these",
      "same-size niches",
      "broader niches",
      "narrower niches"
    ],
    answer: 3,
    explanation: "Specialist species have narrower ecological niches than generalists."
  },
  {
    question: "The climax near Tindi village is being controlled by disturbance by cattle. This is an example of",
    options: [
      "edaphic climax",
      "catastrophic climax",
      "climatic climax",
      "disclimax"
    ],
    answer: 3,
    explanation: "A disclimax is a stable community maintained by recurring disturbances such as cattle grazing."
  },
  {
    question: "A species found most frequently in a particular community, but also present occasionally in others is called",
    options: [
      "accidental species",
      "exclusive species",
      "indifferent species",
      "selective species"
    ],
    answer: 3,
    explanation: "Indifferent species occur frequently in one community but occasionally in others."
  },
  {
    question: "Which of these depicts correctly the lithosere primary succession?",
    options: [
      "rock --> crustose lichen --> foliose lichen --> shrub --> herbaceous stage --> moss --> woodland --> climax",
      "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax",
      "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
      "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax"
    ],
    answer: 3,
    explanation: "Correct lithosere succession is: rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax."
  },
  {
    question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    answer: 2,
    explanation: "Dispersal is the movement of individuals away from their place of origin to new habitats."
  },
  {
    question: "Transplantation experiments are used to find",
    options: ["effective range", "economic range", "actual range", "potential range"],
    answer: 3,
    explanation: "Transplantation experiments help determine the potential range where a species can survive."
  },
  {
    question: "\"The geographical distribution of a species will be controlled by that environment factor for which the organism has the narrowest range of tolerance\" this is the statement for",
    options: [
      "Liebig's law of minimum",
      "Shelford's law of intolerance",
      "Liebig's law of maximum",
      "Shelford's law of tolerance"
    ],
    answer: 1,
    explanation: "Shelford's law of tolerance states that distribution is controlled by the factor with the narrowest tolerance range."
  },
  {
    question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
    options: ["autopathy", "autophagy", "allelopathy", "allelophagy"],
    answer: 2,
    explanation: "Allelopathy refers to chemical inhibition of one species by another."
  },
  {
    question: "\"Quick movement over large distances, often across unsuitable terrain\" is a definition of",
    options: ["drifting", "diffusion", "secular dispersal", "jump dispersal"],
    answer: 3,
    explanation: "Jump dispersal refers to quick movement over large distances across unsuitable terrain."
  },
  {
    question: "Good climate is a",
    options: ["demographic factor", "push factor", "chemical factor", "pull factor"],
    answer: 3,
    explanation: "Good climate acts as a pull factor attracting organisms to a habitat."
  },
  {
    question: "Scarcity of food is a",
    options: ["pull factor", "push factor", "demographic factor", "chemical factor"],
    answer: 1,
    explanation: "Scarcity of food is a push factor forcing organisms to leave a habitat."
  },
  {
    question: "Which of these is a physical factor of habitat?",
    options: ["temperatures", "predators", "moisture", "soil"],
    answer: 0,
    explanation: "Temperature is a physical factor, while predators are biological."
  },
  {
    question: "The movement of lions across the Gir landscape is an example of",
    options: ["jump dispersal", "secular dispersal", "diffusion", "drifting"],
    answer: 2,
    explanation: "Diffusion is gradual movement of individuals into new areas."
  },
  {
    question: "\"The rate of biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor\" this is the statement for",
    options: [
      "Liebig's law of minimum",
      "Shelford's law of intolerance",
      "Liebig's law of maximum",
      "Shelford's law of tolerance"
    ],
    answer: 0,
    explanation: "Liebig's law of minimum explains the concept of a limiting factor in biological processes."
  },
  {
    question: "We prefer those areas for the creation of conservation reserve where the level of threat is",
    options: ["non-existent", "very low", "medium", "very high"],
    answer: 3,
    explanation: "Conservation reserves are often prioritized in areas with very high threat to protect biodiversity."
  },
  {
    question: "Captive breeding is an example of",
    options: ["in-situ conservation", "ex-situ preservation", "ex-situ conservation", "in-situ preservation"],
    answer: 2,
    explanation: "Captive breeding involves breeding species outside their natural habitats, thus ex-situ conservation."
  },
  {
    question: "Which of these correctly represents the process of habitat fragmentation and loss",
    options: [
      "original forest --> dissection --> perforation --> fragmentation --> attrition",
      "original forest --> dissection --> attrition --> fragmentation --> perforation",
      "original forest --> dissection --> perforation --> attrition --> fragmentation",
      "original forest --> dissection --> fragmentation --> perforation --> attrition"
    ],
    answer: 0,
    explanation: "The typical process sequence is dissection, perforation, fragmentation, and attrition."
  },
  {
    question: "According to Leopold, which of these is not a tool of habitat management",
    options: ["sickle", "cattle", "gun", "fire"],
    answer: 1,
    explanation: "Cattle is not considered a tool of habitat management according to Leopold."
  },
  {
    question: "Zoo is an example of",
    options: ["ex-situ preservation", "in-situ preservation", "in-situ conservation", "ex-situ conservation"],
    answer: 3,
    explanation: "Zoos conserve species outside their natural habitats, so they are examples of ex-situ conservation."
  },
  {
    question: "The acronym HIPPO does not include",
    options: ["habitat loss", "invasive species", "pollination", "pollution"],
    answer: 2,
    explanation: "HIPPO stands for Habitat loss, Invasive species, Pollution, Population growth, and Overharvesting; it does not include pollination."
  },
  {
    question: "The \"subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce\" is the definition of",
    options: ["habitat", "biosphere", "biome", "ecosystem"],
    answer: 0,
    explanation: "This is the definition of habitat."
  },
  {
    question: "Which of these is a stochastic factor",
    options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
    answer: 3,
    explanation: "Environmental fluctuations are stochastic factors because they are random."
  },
  {
    question: "Which of these is a deterministic factor?",
    options: ["diseases", "death rate", "forest fire", "environmental variation"],
    answer: 0,
    explanation: "Diseases are deterministic factors influencing populations predictably."
  },
  {
    question: "The acronym HIPPO does not include",
    options: ["human over-population", "habitat loss", "habitat enhancement", "invasive species"],
    answer: 2,
    explanation: "Habitat enhancement is not part of the HIPPO acronym."
  },
   {
    question: "The book \"An essay on the principle of population\" was written by",
    options: ["Owens", "Malthus", "Darwin", "Spencer"],
    answer: 1,
    explanation: "Thomas Malthus authored this influential book on population."
  },
  {
    question: "_______ is used to identify which potential impacts are relevant to assess.",
    options: ["scoping", "review", "reporting", "screening"],
    answer: 0,
    explanation: "Scoping helps determine relevant impacts to focus on in an assessment."
  },
  {
    question: "Which of these is a preventive check according to Malthus?",
    options: ["vice", "misery", "flood", "foresight"],
    answer: 3,
    explanation: "Foresight is a preventive check as it involves voluntary actions to limit population."
  },
  {
    question: "Which of these is a pillar of sustainability?",
    options: ["trans-boundary sustainability", "agricultural sustainability", "industrial sustainability", "social sustainability"],
    answer: 3,
    explanation: "Social sustainability is one of the three main pillars, alongside environmental and economic."
  },
  {
    question: "The quantum of human impacts is given by",
    options: ["I = P X A X T", "I = P + A + T", "I = P - (A+T)", "I = P + A - T"],
    answer: 0,
    explanation: "I = P x A x T represents Impact = Population x Affluence x Technology."
  },
  {
    question: "Which of these is a positive check according to Malthus?",
    options: ["war", "moral restraint", "celibacy", "late marriage"],
    answer: 0,
    explanation: "War is a positive check as it increases mortality."
  },
  {
    question: "______ determines which projects or developments require a full or partial impact assessment study.",
    options: ["reporting", "scoping", "screening", "review"],
    answer: 2,
    explanation: "Screening helps decide the need for detailed impact assessment."
  },
  {
    question: "The demographic transition sees a society move from",
    options: [
      "high birth rate, low death rate to low birth rate, low death rate",
      "high birth rate, high death rate to low birth rate, high death rate",
      "low birth rate, high death rate to low birth rate, low death rate",
      "high birth rate, high death rate to low birth rate, low death rate"
    ],
    answer: 3,
    explanation: "Demographic transition involves decline in both birth and death rates."
  },
  {
    question: "Which of these is not a pillar of sustainability?",
    options: ["environmental sustainability", "economic sustainability", "agricultural sustainability", "trans-boundary sustainability"],
    answer: 2,
    explanation: "Agricultural sustainability is important but not considered a core pillar."
  },
  {
    question: "According to Malthusian model",
    options: [
      "population grows in arithmetic progression, food supply increases in geometric progression",
      "population grows in geometric progression, food supply increases in arithmetic progression",
      "population grows in geometric progression, food supply increases in geometric progression",
      "population grows in arithmetic progression, food supply increases in arithmetic progression"
    ],
    answer: 1,
    explanation: "Population grows faster (geometric), food supply grows slower (arithmetic), causing pressure."
  },
   {
    question: "Which of these is not a principle of ecological restoration?",
    options: [
      "benefits and engages society",
      "informed by past and future",
      "short term sustainability",
      "ecological integrity"
    ],
    answer: 2,
    explanation: "Ecological restoration focuses on long-term sustainability, not short-term."
  },
  {
    question: "Because of climate change, Mudumalai tiger reserve suffers from frequent droughts. Management builds and refills artificial water holes regularly. This action is called:",
    options: ["adaptation", "mitigation", "deceleration", "maladaptation"],
    answer: 0,
    explanation: "Providing water to wildlife in droughts is an adaptive response to climate change."
  },
  {
    question: "Which of these is not a climatic forcing for Earth?",
    options: [
      "changes in Sun's orbit",
      "changes in Earth's orbit",
      "changes in Sun's strength",
      "changes in plate tectonics"
    ],
    answer: 0,
    explanation: "The Sun does not have an orbit; Earth's and Sun's strength changes are forcings."
  },
  {
    question: "\"The ability of a system to adjust to climate change to moderate damages or cope with consequences\" is:",
    options: [
      "mitigative capacity",
      "mitigative response",
      "adaptive capacity",
      "adaptive response"
    ],
    answer: 2,
    explanation: "Adaptive capacity is the system’s ability to adjust to climate change impacts."
  },
  {
    question: "\"Any changes that inadvertently increase vulnerability to climate stimuli\" is called:",
    options: ["malmitigation", "maladaptation", "adaptation", "mitigation"],
    answer: 1,
    explanation: "Maladaptation refers to adaptations that increase vulnerability instead of reducing it."
  },
  {
    question: "Macrodebris in plastic pollution has fragment size:",
    options: ["<5mm", "<1mm", ">20mm", "5-20mm"],
    answer: 2,
    explanation: "Macrodebris refers to plastic fragments larger than 20mm."
  },
  {
    question: "Mesodebris in plastic pollution has fragment size:",
    options: ["<1mm", "<5mm", "5-20mm", ">20mm"],
    answer: 2,
    explanation: "Mesodebris are plastic fragments sized between 5mm and 20mm."
  },
  {
    question: "Government regulation replacing incandescent bulbs with LEDs to reduce electricity and CO2 is:",
    options: ["deceleration", "mitigation", "maladaptation", "adaptation"],
    answer: 1,
    explanation: "This is a mitigation action aimed at reducing greenhouse gas emissions."
  },
  {
    question: "Which of these is not a principle of ecological restoration?",
    options: [
      "informed by past and future",
      "ecological integrity",
      "long term sustainability",
      "benefits and engages scientists"
    ],
    answer: 3,
    explanation: "Restoration emphasizes benefits to society, not just scientists."
  },
  {
    question: "Which of these is not a climatic forcing for Earth?",
    options: [
      "changes in Earth's orbit",
      "changes in plate tectonics",
      "changes in Moon's orbit",
      "changes in Sun's strength"
    ],
    answer: 2,
    explanation: "Moon’s orbit changes are not considered a major climatic forcing."
  },
  {
    question: "Ludwig's ratchet predicts",
    options: [
      "fluctuating harvesting rate",
      "increasing harvesting rate",
      "constant harvesting rate",
      "decreasing harvesting rate"
    ],
    answer: 1,
    explanation: "Ludwig's ratchet predicts an increasing harvesting rate over time, leading to overexploitation."
  },
  {
    question: "Which of these is correct?",
    options: [
      "R + G + M + F = 0",
      "R + G = M + F",
      "R + M = G + F",
      "R + F = M + G"
    ],
    answer: 1,
    explanation: "Recruitment plus Growth equals Mortality plus Fishing mortality in population dynamics."
  },
  {
    question: "The impact of El Nino on fishery in Peru is explained by",
    options: [
      "mismatch hypothesis",
      "match- mismatch hypothesis",
      "match hypothesis",
      "none of these"
    ],
    answer: 0,
    explanation: "The mismatch hypothesis explains how El Nino disrupts timing between food availability and fish larvae."
  },
  {
    question: "A deciduous forest in Madhya Pradesh was converted to a mine. After mining, pits filled with water formed a lake visited by migratory birds. This is an example of",
    options: [
      "replacement",
      "enhancement",
      "restoration",
      "recovery"
    ],
    answer: 0,
    explanation: "Replacement refers to a new ecosystem type (lake) replacing the original forest ecosystem."
  },
  {
    question: "Which of these is not an impact of toxic chemicals?",
    options: [
      "reduction of existing stressors",
      "lethal effects",
      "reduced fecundity",
      "sub-lethal effects"
    ],
    answer: 0,
    explanation: "Toxic chemicals generally add stress rather than reduce existing stressors."
  },
  {
    question: "A deciduous forest in Madhya Pradesh was converted to a mine. After mining, pits filled with soil and forest species planted again. This is an example of",
    options: [
      "enhancement",
      "recovery",
      "restoration",
      "replacement"
    ],
    answer: 2,
    explanation: "Restoration is active intervention to bring back the original ecosystem."
  },
  {
    question: "A pest population is called uncontrolled when",
    options: [
      "it is increasing",
      "it is not decreasing",
      "it is causing excessive economic damage",
      "it is causing some economic damage"
    ],
    answer: 2,
    explanation: "Uncontrolled pests cause economic damage above the threshold of acceptability."
  },
  {
    question: "The root zone treatment plant is an example of",
    options: [
      "bioaccumulation",
      "biomagnification",
      "biological control",
      "phytoremediation"
    ],
    answer: 3,
    explanation: "Root zone treatment uses plants to clean pollutants, a form of phytoremediation."
  },
  {
    question: "A pest population is called controlled when",
    options: [
      "it is not causing excessive economic damage",
      "it is not increasing",
      "it is decreasing",
      "it is not causing any economic damage"
    ],
    answer: 0,
    explanation: "Control means the pest population is kept below economically damaging levels."
  },
  {
    question: "Which of these is correct?",
    options: [
      "the maximum sustainable yield is near the beginning of the sigmoidal curve",
      "the maximum sustainable yield is near the mid-point of the sigmoidal curve",
      "none of these",
      "the maximum sustainable yield is near the end of the sigmoidal curve"
    ],
    answer: 1,
    explanation: "Maximum sustainable yield occurs near the inflection point (mid-point) of the sigmoidal growth curve."
  },
  {
    question: "Which of these is not a pillar of sustainability?",
    options: [
      "social sustainability",
      "trans-boundary sustainability",
      "economic sustainability",
      "environmental sustainability"
    ],
    answer: 1,
    explanation: "Trans-boundary sustainability is not generally recognized as a core pillar; the main pillars are social, economic, and environmental sustainability."
  },
  {
    question: "The scientific study of animal behaviour is called",
    options: [
      "prey-predator dynamics",
      "ethology",
      "behaviourism",
      "ecology"
    ],
    answer: 1,
    explanation: "Ethology is the scientific study of animal behavior, especially under natural conditions."
  },
  {
    question: "\"Enquiry into plants\" is a book written by",
    options: [
      "Theophrastus",
      "Linnaeus",
      "Malthus",
      "Humboldt"
    ],
    answer: 0,
    explanation: "Theophrastus, a Greek philosopher, wrote 'Enquiry into Plants', considered the first botanical treatise."
  },
  {
    question: "The juvenile mortality rate is the annual number of deaths of juveniles per",
    options: [
      "100 live births",
      "1000 births",
      "100 births",
      "1000 live births"
    ],
    answer: 3,
    explanation: "Juvenile mortality rate is usually expressed per 1000 live births."
  },
  {
    question: "Consider the food chain: grass → grasshopper → frog → snake → hawk. In this food chain",
    options: [
      "frog is producer",
      "frog is consumer and carnivore",
      "frog is decomposer",
      "frog is consumer and herbivore"
    ],
    answer: 1,
    explanation: "Frog is a carnivore consumer feeding on herbivorous grasshoppers."
  },
  {
    question: "A zoo is an example of",
    options: [
      "ex-situ preservation",
      "in-situ conservation",
      "in-situ preservation",
      "ex-situ conservation"
    ],
    answer: 3,
    explanation: "Zoos represent ex-situ conservation as species are conserved outside their natural habitats."
  },
  {
    question: "The mitochondrion is a/an",
    options: [
      "sub-cellular organelle",
      "cell",
      "tissue",
      "organ"
    ],
    answer: 0,
    explanation: "Mitochondrion is a sub-cellular organelle responsible for energy production."
  },
  {
    question: "Importance value varies from",
    options: [
      "0 to 300",
      "0 to 100",
      "0 to 50",
      "0 to 10"
    ],
    answer: 0,
    explanation: "Importance value index ranges from 0 to 300, combining relative density, frequency, and dominance."
  },
  {
    question: "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals and fills them regularly. In the context of climate change, such an action would be called",
    options: [
      "maladaptation",
      "deceleration",
      "mitigation",
      "adaptation"
    ],
    answer: 3,
    explanation: "Building artificial water holes to cope with drought is an adaptation strategy."
  },
  {
    question: "Good climate is a",
    options: [
      "pull factor",
      "push factor",
      "demographic factor",
      "chemical factor"
    ],
    answer: 0,
    explanation: "Good climate acts as a pull factor attracting species or people."
  }
];




export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (optionIndex) => {
    if (optionIndex === quizQuestions[current].answer) {
      setScore(score + 1);
    }
    setSelected(optionIndex);
  };

  const handleNext = () => {
    setSelected(null);
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
  <div className="quiz-container">
    {showScore ? (
      <div className="quiz-score card">
        <h2>🎉 Quiz Completed!</h2>
        <p>Your Score: <strong>{score}</strong> / {quizQuestions.length}</p>
        <button className="btn retry" onClick={() => window.location.reload()}>
          🔄 Retry
        </button>
      </div>
    ) : (
      <>
        <div className="quiz-question card">
          <span className="question-number">Question {current + 1} / {quizQuestions.length}</span>
          <h3 className="question-text">{quizQuestions[current].question}</h3>
        </div>
        <div className="quiz-options">
  {quizQuestions[current].options.map((option, index) => (
    <button
      key={index}
      onClick={() => handleAnswer(index)}
      className={`quiz-option ${selected === index ? "selected" : ""}`}
      disabled={selected !== null}
    >
      {option}
    </button>
  ))}
</div>

        {selected !== null && (
          <div className="quiz-controls">
            <p className="explanation">💡 {quizQuestions[current].explanation}</p>
            <button className="btn next" onClick={handleNext}>
              {current === quizQuestions.length - 1 ? "🎯 Finish" : "➡️ Next"}
            </button>
          </div>
        )}
      </>
    )}
  </div>
);
}
