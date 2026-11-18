/* Public, authored practice bank: active courses only. */
const bank=[
  {
    "id": "q0",
    "subject": "Calculus I",
    "topic": "Derivatives",
    "title": "Follow the chain",
    "prompt": "Find the derivative of f(x) = (3x² + 1)⁴. Enter a factored expression.",
    "answer": [
      "24x(3x^2+1)^3",
      "24*x*(3*x^2+1)^3"
    ],
    "clarify": "You are finding the instantaneous rate of change of f with respect to x.",
    "hint": "Identify the outside power and the inside quadratic.",
    "setup": "Let u = 3x² + 1. Use df/dx = (df/du)(du/dx).",
    "solution": "1. The outside derivative is 4u³.\n2. The inside derivative is 6x.\n3. Multiply: f′(x) = 24x(3x² + 1)³.",
    "diagram": "",
    "hub": "derivatives",
    "subtopic": "Derivatives",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "rubric",
    "objective": "Apply product and chain rules",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q1",
    "subject": "Calculus I",
    "topic": "Derivatives",
    "title": "Two changing factors",
    "prompt": "Find f′(2) for f(x) = x² sin(x). Use radians and give a decimal to 2 places.",
    "answer": [
      "1.97",
      "1.9726"
    ],
    "clarify": "Evaluate the derivative at x = 2, not the original function.",
    "hint": "Both factors change; use the product rule.",
    "setup": "f′(x) = (2x)sin(x) + x²cos(x). Substitute only after differentiating.",
    "solution": "f′(2) = 4sin(2) + 4cos(2) ≈ 1.97.",
    "diagram": "",
    "hub": "derivatives",
    "subtopic": "Derivatives",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 1.97,
    "relTol": 0.005,
    "absTol": 0.005,
    "objective": "Apply product and chain rules",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q2",
    "subject": "Calculus I",
    "topic": "Continuity",
    "title": "Close the gap",
    "prompt": "f(x) = (x² − 9)/(x − 3) for x ≠ 3 and f(3) = k. Which k makes f continuous?",
    "answer": [
      "6"
    ],
    "clarify": "Continuity requires the function value to match its two-sided limit.",
    "hint": "Factor the numerator before taking the limit.",
    "setup": "x² − 9 = (x − 3)(x + 3). Cancel only when x ≠ 3.",
    "solution": "For x ≠ 3, f(x) = x + 3. The limit at 3 is 6; set k = 6.",
    "diagram": "",
    "hub": "continuity",
    "subtopic": "Continuity",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 6,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Test all three conditions",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q3",
    "subject": "Calculus I",
    "topic": "Continuity",
    "title": "Match at the boundary",
    "prompt": "f(x) = ax + 1 for x < 2 and x² for x ≥ 2. Find a for continuity at x = 2.",
    "answer": [
      "1.5",
      "3/2"
    ],
    "clarify": "The left-hand limit must equal the right-hand limit and f(2).",
    "hint": "Evaluate both rules at the boundary.",
    "setup": "Set 2a + 1 = 2², then solve for a.",
    "solution": "2a + 1 = 4 ⇒ 2a = 3 ⇒ a = 3/2.",
    "diagram": "",
    "hub": "continuity",
    "subtopic": "Continuity",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 1.5,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Test all three conditions",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q4",
    "subject": "Calculus I",
    "topic": "Critical points",
    "title": "Where the slope pauses",
    "prompt": "Find all critical numbers of f(x) = x³ − 3x. Enter them separated by commas.",
    "answer": [
      "-1,1",
      "1,-1"
    ],
    "clarify": "Critical numbers are domain values where the derivative is zero or undefined.",
    "hint": "Differentiate, then factor.",
    "setup": "f′(x) = 3x² − 3. Solve f′(x) = 0 and check whether it is ever undefined.",
    "solution": "3(x² − 1) = 0 gives x = −1 and x = 1. The derivative exists everywhere.",
    "diagram": "",
    "hub": "critical",
    "subtopic": "Critical points",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "text",
    "objective": "Locate domain-valid candidates",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q5",
    "subject": "Calculus I",
    "topic": "Critical points",
    "title": "Classify the turning point",
    "prompt": "For f(x) = x³ − 3x, is x = −1 a local maximum, local minimum, or neither?",
    "answer": [
      "local maximum",
      "maximum",
      "max"
    ],
    "clarify": "Classify the point using nearby behavior, not just a zero derivative.",
    "hint": "Use the second derivative or a sign chart.",
    "setup": "f″(x) = 6x. Evaluate its sign at the given point.",
    "solution": "f″(−1) = −6 < 0, so the graph is concave down there: a local maximum.",
    "diagram": "",
    "hub": "critical",
    "subtopic": "Critical points",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "text",
    "objective": "Locate domain-valid candidates",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q6",
    "subject": "Calculus I",
    "topic": "Limits",
    "title": "A removable obstacle",
    "prompt": "Evaluate lim as x → 2 of (x² − 4)/(x − 2).",
    "answer": [
      "4"
    ],
    "clarify": "A limit concerns nearby values; the original quotient is undefined at x = 2.",
    "hint": "Factor the difference of squares.",
    "setup": "Rewrite x² − 4 as (x − 2)(x + 2), then simplify for x ≠ 2.",
    "solution": "The quotient equals x + 2 away from 2. Its limit is 4.",
    "diagram": "",
    "hub": "limits",
    "subtopic": "Limits",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 4,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Evaluate removable forms",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q7",
    "subject": "Calculus I",
    "topic": "Limits",
    "title": "A familiar small angle",
    "prompt": "Evaluate lim as x → 0 of sin(5x)/x. Angles are in radians.",
    "answer": [
      "5"
    ],
    "clarify": "Use the standard sine limit with a matching argument and denominator.",
    "hint": "Multiply and divide by the coefficient inside the sine.",
    "setup": "Rewrite as 5 · sin(5x)/(5x).",
    "solution": "Since sin(u)/u → 1 as u → 0, the limit is 5.",
    "diagram": "",
    "hub": "limits",
    "subtopic": "Limits",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 5,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Evaluate removable forms",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q8",
    "subject": "Calculus I",
    "topic": "Related rates",
    "title": "A growing circle",
    "prompt": "A circle’s radius increases at 3 cm/s. How fast is its area changing when r = 4 cm? Give the coefficient of π in cm²/s.",
    "answer": [
      "24"
    ],
    "clarify": "The requested quantity is dA/dt at a specific radius.",
    "hint": "Differentiate the area equation with respect to time.",
    "setup": "A = πr², so dA/dt = 2πr · dr/dt.",
    "solution": "Substitute r = 4 and dr/dt = 3: dA/dt = 24π cm²/s. The coefficient is 24.",
    "diagram": "",
    "hub": "related",
    "subtopic": "Related rates",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 24,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Build a geometric constraint",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q9",
    "subject": "Calculus I",
    "topic": "Related rates",
    "title": "The sliding ladder",
    "prompt": "A 10 m ladder leans on a wall. Its foot moves away at 2 m/s. When the foot is 6 m from the wall, find the signed vertical rate of the top in m/s.",
    "answer": [
      "-1.5",
      "-3/2"
    ],
    "clarify": "A negative vertical rate means the top is moving down.",
    "hint": "Use the fixed ladder length before differentiating.",
    "setup": "x² + y² = 100. Differentiate: 2x dx/dt + 2y dy/dt = 0. Find y from the triangle.",
    "solution": "At x = 6, y = 8. Thus dy/dt = −(6/8)(2) = −1.5 m/s.",
    "diagram": "",
    "hub": "related",
    "subtopic": "Related rates",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "units": "m/s",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": -1.5,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Build a geometric constraint",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q10",
    "subject": "Physics I",
    "topic": "Forces",
    "title": "Read the free-body diagram",
    "prompt": "A 4 kg block on a frictionless horizontal surface is pulled right by 12 N. What is its horizontal acceleration in m/s²?",
    "answer": [
      "3"
    ],
    "clarify": "Only the horizontal force determines horizontal acceleration.",
    "hint": "Separate the horizontal and vertical equations.",
    "setup": "Choose +x to the right. Write ΣFₓ = maₓ and ΣFᵧ = 0.",
    "solution": "ΣFₓ = 12 N = (4 kg)aₓ. Therefore aₓ = 3 m/s² rightward. Normal force and weight cancel vertically.",
    "diagram": "force",
    "hub": "forces",
    "subtopic": "Forces",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "m/s^2",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 3,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Isolate a body",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q11",
    "subject": "Physics I",
    "topic": "Forces",
    "title": "Friction joins the picture",
    "prompt": "A 5 kg block slides right on a horizontal surface. A 20 N force pulls right; kinetic friction is 5 N left. Find horizontal acceleration in m/s².",
    "answer": [
      "3"
    ],
    "clarify": "Use the net force, with directions represented by signs.",
    "hint": "Friction opposes the sliding motion.",
    "setup": "Take right as positive: ΣFₓ = Fpull − fk = ma.",
    "solution": "20 − 5 = 5a, so a = 3 m/s² to the right.",
    "diagram": "friction",
    "hub": "forces",
    "subtopic": "Forces",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "m/s^2",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 3,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Isolate a body",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q12",
    "subject": "Physics I",
    "topic": "Kinematics",
    "title": "From rest to motion",
    "prompt": "A cart starts from rest and accelerates constantly at 2 m/s² for 3 s. How far does it travel in meters?",
    "answer": [
      "9"
    ],
    "clarify": "Initial velocity is zero; you need displacement, not final velocity.",
    "hint": "Choose an equation that includes time, acceleration and initial velocity.",
    "setup": "Δx = v₀t + ½at².",
    "solution": "Δx = 0 + ½(2)(3²) = 9 m.",
    "diagram": "motion",
    "hub": "kinematics",
    "subtopic": "Kinematics",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "m",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 9,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Read motion graphs",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q13",
    "subject": "Physics I",
    "topic": "Kinematics",
    "title": "At the highest point",
    "prompt": "A ball is thrown vertically upward at 19.6 m/s. Ignoring air resistance with g = 9.8 m/s², how long until it reaches its highest point? Enter seconds.",
    "answer": [
      "2"
    ],
    "clarify": "The velocity is zero at the highest point, but acceleration is still downward.",
    "hint": "Choose upward as positive.",
    "setup": "v = v₀ + at; set v = 0 and a = −9.8 m/s².",
    "solution": "0 = 19.6 − 9.8t, so t = 2 s.",
    "diagram": "vertical",
    "hub": "kinematics",
    "subtopic": "Kinematics",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "s",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 2,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Read motion graphs",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q14",
    "subject": "Physics I",
    "topic": "Energy",
    "title": "Height becomes speed",
    "prompt": "A cart starts from rest and descends a frictionless track through a vertical height of 5 m. With g = 10 m/s², what is its speed at the bottom in m/s?",
    "answer": [
      "10"
    ],
    "clarify": "The path shape does not affect the energy result without friction.",
    "hint": "Gravitational potential energy becomes kinetic energy.",
    "setup": "mgh = ½mv². Cancel the mass before solving.",
    "solution": "v = √(2gh) = √(2·10·5) = 10 m/s.",
    "diagram": "hill",
    "hub": "energy",
    "subtopic": "Energy",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "m/s",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 10,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Calculate work",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q15",
    "subject": "Physics I",
    "topic": "Momentum",
    "title": "A shared final velocity",
    "prompt": "A 2 kg cart moving right at 3 m/s sticks to a stationary 1 kg cart. Find their final velocity in m/s (right positive).",
    "answer": [
      "2"
    ],
    "clarify": "Sticking together means both carts have one final velocity.",
    "hint": "Momentum is conserved; kinetic energy need not be.",
    "setup": "m₁v₁ + m₂v₂ = (m₁ + m₂)vf.",
    "solution": "2·3 + 1·0 = 3vf, so vf = 2 m/s rightward.",
    "diagram": "collision",
    "hub": "momentum",
    "subtopic": "Momentum",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "m/s",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 2,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Use force-time area",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q16",
    "subject": "Organic Chemistry I",
    "topic": "Functional groups",
    "title": "Name the defining group",
    "prompt": "Identify the functional group in CH₃–C(=O)–O–CH₂–CH₃.",
    "answer": [
      "ester"
    ],
    "clarify": "Classify the complete connectivity around the carbonyl.",
    "hint": "Look at what is directly bonded to the carbonyl carbon.",
    "setup": "Compare C(=O)–O–C with C(=O)–OH and C(=O)–C.",
    "solution": "This is an ester: the carbonyl carbon is bonded to an oxygen that is bonded to another carbon.",
    "diagram": "ester",
    "hub": "groups",
    "subtopic": "Functional groups",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "text",
    "objective": "Distinguish carbonyl families",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q17",
    "subject": "Organic Chemistry I",
    "topic": "Functional groups",
    "title": "Carbonyl neighbors",
    "prompt": "What functional group is in CH₃–C(=O)–CH₃?",
    "answer": [
      "ketone"
    ],
    "clarify": "Inspect the groups attached directly to the carbonyl carbon.",
    "hint": "Neither neighbor is hydrogen or a heteroatom.",
    "setup": "A carbonyl with a carbon group on both sides has a distinct classification.",
    "solution": "It is a ketone. Both sides of the carbonyl carbon are bonded to carbon.",
    "diagram": "ketone",
    "hub": "groups",
    "subtopic": "Functional groups",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "text",
    "objective": "Distinguish carbonyl families",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q18",
    "subject": "Organic Chemistry I",
    "topic": "Structure",
    "title": "Read a condensed structure",
    "prompt": "How many carbon atoms are in CH₃–CH(CH₃)–CH₂–OH?",
    "answer": [
      "4"
    ],
    "clarify": "Include the carbon in the branch shown in parentheses.",
    "hint": "Count carbon symbols, not only positions along the main chain.",
    "setup": "Count the left terminal group, central CH, parenthesized branch, and CH₂ group.",
    "solution": "There are 4 carbons: the main chain has 3 and the methyl branch adds 1.",
    "diagram": "branch",
    "hub": "structure",
    "subtopic": "Structure",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 4,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Read condensed and skeletal structures",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q19",
    "subject": "Organic Chemistry I",
    "topic": "Structure",
    "title": "Hydrogen accounting",
    "prompt": "How many total hydrogen atoms are in CH₃–CH₂–OH?",
    "answer": [
      "6"
    ],
    "clarify": "The hydrogen on oxygen counts toward the molecular formula.",
    "hint": "Add all explicit hydrogen subscripts, including OH.",
    "setup": "Count hydrogens on each carbon and then on oxygen.",
    "solution": "3 + 2 + 1 = 6 hydrogens; the formula is C₂H₆O.",
    "diagram": "ethanol",
    "hub": "structure",
    "subtopic": "Structure",
    "difficulty": "Foundation",
    "type": "Calculation",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "number",
    "value": 6,
    "relTol": 0.005,
    "absTol": 1e-8,
    "objective": "Read condensed and skeletal structures",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q20",
    "subject": "Organic Chemistry I",
    "topic": "Chirality",
    "title": "Four different neighbors",
    "prompt": "Is carbon 2 of CH₃–CH(OH)–CH₂–CH₃ a stereogenic center? Answer yes or no.",
    "answer": [
      "yes"
    ],
    "clarify": "Consider the four substituents directly connected to carbon 2.",
    "hint": "Compare entire carbon chains, not just the first attached atoms.",
    "setup": "List H, OH, the chain on the left, and the chain on the right.",
    "solution": "Yes. It has four different substituents: H, OH, methyl, and ethyl.",
    "diagram": "chiral",
    "hub": "stereo",
    "subtopic": "Chirality",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "text",
    "objective": "Assign CIP priorities",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q21",
    "subject": "Organic Chemistry I",
    "topic": "Chirality",
    "title": "A repeated substituent",
    "prompt": "Is the middle carbon in CH₃–CH(OH)–CH₃ a stereogenic center? Answer yes or no.",
    "answer": [
      "no"
    ],
    "clarify": "A tetrahedral stereogenic center requires four different substituents.",
    "hint": "Check whether the left and right groups are identical.",
    "setup": "List every group attached to the middle carbon and look for duplicates.",
    "solution": "No. Two of its substituents are identical methyl groups.",
    "diagram": "achiral",
    "hub": "stereo",
    "subtopic": "Chirality",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "text",
    "objective": "Assign CIP priorities",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q22",
    "subject": "Organic Chemistry I",
    "topic": "E/Z",
    "title": "Across the double bond",
    "prompt": "In the alkene diagram, assign E or Z. Each alkene carbon has one CH₃ and one H.",
    "answer": [
      "E"
    ],
    "clarify": "Use the higher-priority group on each end of the double bond.",
    "hint": "Carbon has higher CIP priority than hydrogen.",
    "setup": "Select the higher-priority substituent on each carbon, then compare their sides.",
    "solution": "CH₃ has higher priority than H on both carbons. The CH₃ groups are on opposite sides, so the alkene is E.",
    "diagram": "alkeneE",
    "hub": "stereo",
    "subtopic": "E/Z",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "text",
    "objective": "Assign CIP priorities",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q23",
    "subject": "Organic Chemistry I",
    "topic": "E/Z",
    "title": "On the same side",
    "prompt": "In the alkene diagram, assign E or Z. Each alkene carbon has one CH₃ and one H.",
    "answer": [
      "Z"
    ],
    "clarify": "E/Z compares the higher-priority substituents across a double bond.",
    "hint": "Identify which group wins priority on each carbon.",
    "setup": "Use atomic numbers of the directly attached atoms, then compare sides.",
    "solution": "Both CH₃ groups have higher priority and lie on the same side: Z.",
    "diagram": "alkeneZ",
    "hub": "stereo",
    "subtopic": "E/Z",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "text",
    "objective": "Assign CIP priorities",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q24",
    "subject": "Organic Chemistry I",
    "topic": "R/S",
    "title": "Follow the priorities",
    "prompt": "A stereocenter has priorities 1 → 2 → 3 clockwise as drawn, with priority 4 pointing away. Assign R or S.",
    "answer": [
      "R"
    ],
    "clarify": "Priorities are already assigned; focus on orientation.",
    "hint": "First confirm the lowest-priority group points away.",
    "setup": "Trace from 1 to 2 to 3. Apply the clockwise/counterclockwise convention with 4 away.",
    "solution": "With 4 pointing away, clockwise 1 → 2 → 3 is R.",
    "diagram": "rs",
    "hub": "stereo",
    "subtopic": "R/S",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "text",
    "objective": "Assign CIP priorities",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "q25",
    "subject": "Organic Chemistry I",
    "topic": "R/S",
    "title": "Reverse the viewpoint",
    "prompt": "Priorities 1 → 2 → 3 appear clockwise, but priority 4 points toward you. Assign R or S.",
    "answer": [
      "S"
    ],
    "clarify": "The visible rotation must be inverted when the lowest-priority group points toward you.",
    "hint": "The orientation of priority 4 changes the interpretation.",
    "setup": "Find the apparent configuration, then invert it because 4 points toward you.",
    "solution": "Clockwise would be R if 4 pointed away. With 4 toward you, invert it: S.",
    "diagram": "rsToward",
    "hub": "stereo",
    "subtopic": "R/S",
    "difficulty": "Foundation",
    "type": "Recall",
    "minutes": 3,
    "source": "Original practice • Original introductory practice",
    "units": "",
    "rubric": [
      "State the relevant principle",
      "Apply it to the given information",
      "Check the result and assumptions"
    ],
    "kind": "text",
    "objective": "Assign CIP priorities",
    "calculate": "Use the symbolic setup, substitute the stated values, then check the requested form and units."
  },
  {
    "id": "v2-1",
    "hub": "limits",
    "subject": "Calculus I",
    "topic": "Limits",
    "subtopic": "Rationalize before substituting",
    "title": "Rationalize before substituting",
    "prompt": "Evaluate lim x→0 of (√(9+x)−3)/x.",
    "answer": [
      "0.16666666666666666"
    ],
    "kind": "number",
    "value": 0.16666666666666666,
    "units": "",
    "hint": "Use the conjugate.",
    "setup": "Multiply top and bottom by √(9+x)+3.",
    "solution": "The numerator becomes x. For x≠0 the expression is 1/(√(9+x)+3), whose limit is 1/6. The denominator tends to a nonzero value.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Evaluate removable forms",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-2",
    "hub": "limits",
    "subject": "Calculus I",
    "topic": "Limits",
    "subtopic": "A two-sided disagreement",
    "title": "A two-sided disagreement",
    "prompt": "Evaluate the two-sided limit of |x|/x as x→0. Enter DNE if it does not exist.",
    "answer": [
      "dne",
      "does not exist"
    ],
    "kind": "text",
    "units": "",
    "hint": "Check positive and negative x separately.",
    "setup": "For x>0, |x|=x; for x<0, |x|=−x.",
    "solution": "The right limit is 1 and the left limit is −1. They disagree, so the two-sided limit does not exist.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Evaluate removable forms",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-3",
    "hub": "limits",
    "subject": "Calculus I",
    "topic": "Limits",
    "subtopic": "Dominant powers",
    "title": "Dominant powers",
    "prompt": "Find lim x→∞ of (3x²+2)/(2x²−x).",
    "answer": [
      "1.5"
    ],
    "kind": "number",
    "value": 1.5,
    "units": "",
    "hint": "Divide by the highest power of x.",
    "setup": "Divide numerator and denominator by x².",
    "solution": "The expression becomes (3+2/x²)/(2−1/x). Vanishing terms give 3/2.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Evaluate removable forms",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-4",
    "hub": "limits",
    "subject": "Calculus I",
    "topic": "Limits",
    "subtopic": "Error analysis: cancellation",
    "title": "Error analysis: cancellation",
    "prompt": "A student cancels x from (x+2)/x and obtains 2. Explain the error and rewrite correctly.",
    "answer": [
      "(x+2)/x = 1 + 2/x for x ≠ 0. Cancellation applies to common factors, not one term of a sum."
    ],
    "kind": "rubric",
    "units": "",
    "hint": "Cancellation needs a factor of the whole numerator.",
    "setup": "Split the quotient into x/x + 2/x.",
    "solution": "The correct form is 1+2/x. A factor multiplies every term; x is not a common factor of x+2.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Error analysis",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Evaluate removable forms",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-5",
    "hub": "continuity",
    "subject": "Calculus I",
    "topic": "Continuity",
    "subtopic": "A jump cannot be patched",
    "title": "A jump cannot be patched",
    "prompt": "f(x)=1 for x<0 and f(x)=2 for x>0. Can any choice of f(0) make f continuous?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Compare the one-sided limits.",
    "setup": "Continuity requires both one-sided limits and the function value to coincide.",
    "solution": "No. The one-sided limits are 1 and 2; changing one function value cannot make them equal.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Test all three conditions",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-6",
    "hub": "continuity",
    "subject": "Calculus I",
    "topic": "Continuity",
    "subtopic": "Match an exponential branch",
    "title": "Match an exponential branch",
    "prompt": "f(x)=eˣ for x<0 and k+x for x≥0. Find k for continuity at 0.",
    "answer": [
      "1"
    ],
    "kind": "number",
    "value": 1,
    "units": "",
    "hint": "Evaluate each branch at the boundary.",
    "setup": "Set e⁰ = k+0.",
    "solution": "The left limit is 1; the right limit and value are k. Thus k=1.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Test all three conditions",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-7",
    "hub": "continuity",
    "subject": "Calculus I",
    "topic": "Continuity",
    "subtopic": "Domain before continuity",
    "title": "Domain before continuity",
    "prompt": "Is f(x)=1/(x−4) continuous at x=4?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "First ask whether the function value exists.",
    "setup": "Evaluate the denominator at 4.",
    "solution": "No. f(4) is undefined and the function is unbounded near 4; this is not a removable gap.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Test all three conditions",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-8",
    "hub": "continuity",
    "subject": "Calculus I",
    "topic": "Continuity",
    "subtopic": "Existence of a root",
    "title": "Existence of a root",
    "prompt": "A continuous f on [1,3] has f(1)=−2 and f(3)=5. Does a root necessarily lie in (1,3)?",
    "answer": [
      "yes"
    ],
    "kind": "text",
    "units": "",
    "hint": "Use the intermediate value theorem.",
    "setup": "Zero lies between the endpoint function values.",
    "solution": "Yes. Continuity plus the sign change guarantees at least one c with f(c)=0. It does not guarantee uniqueness.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Test all three conditions",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-9",
    "hub": "derivatives",
    "subject": "Calculus I",
    "topic": "Derivatives",
    "subtopic": "A rate with physical units",
    "title": "A rate with physical units",
    "prompt": "Concentration is c(t)=4t²+2 mol/L, with t in seconds and coefficients carrying consistent units. Find dc/dt at t=3 s.",
    "answer": [
      "24"
    ],
    "kind": "number",
    "value": 24,
    "units": "mol/L/s",
    "hint": "Differentiate before inserting t.",
    "setup": "dc/dt=8t.",
    "solution": "At t=3 s, dc/dt=24 mol/(L·s). Its units are concentration divided by time.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Apply product and chain rules",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-10",
    "hub": "derivatives",
    "subject": "Calculus I",
    "topic": "Derivatives",
    "subtopic": "Implicit differentiation",
    "title": "Implicit differentiation",
    "prompt": "For x²+y²=25, find dy/dx at (3,4).",
    "answer": [
      "-0.75"
    ],
    "kind": "number",
    "value": -0.75,
    "units": "",
    "hint": "Remember y depends on x.",
    "setup": "Differentiate: 2x+2y(dy/dx)=0.",
    "solution": "dy/dx=−x/y=−3/4. The negative slope agrees with the upper-right part of a circle.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Apply product and chain rules",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-11",
    "hub": "derivatives",
    "subject": "Calculus I",
    "topic": "Derivatives",
    "subtopic": "Quotient at a point",
    "title": "Quotient at a point",
    "prompt": "For f(x)=x/(x+1), find f′(1).",
    "answer": [
      "0.25"
    ],
    "kind": "number",
    "value": 0.25,
    "units": "",
    "hint": "Use the quotient rule.",
    "setup": "f′(x)=[(x+1)−x]/(x+1)².",
    "solution": "f′(1)=1/4. The derivative exists since x+1≠0 at 1.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Apply product and chain rules",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-12",
    "hub": "derivatives",
    "subject": "Calculus I",
    "topic": "Derivatives",
    "subtopic": "A corner",
    "title": "A corner",
    "prompt": "Does f(x)=|x| have a derivative at x=0?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Compare left and right slopes.",
    "setup": "For negative x the slope is −1; for positive x it is +1.",
    "solution": "No. Unequal one-sided slopes prevent differentiability, although the function is continuous.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Apply product and chain rules",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-13",
    "hub": "critical",
    "subject": "Calculus I",
    "topic": "Critical points",
    "subtopic": "Stationary without an extremum",
    "title": "Stationary without an extremum",
    "prompt": "Classify x=0 for f(x)=x³: local maximum, local minimum, or neither.",
    "answer": [
      "neither"
    ],
    "kind": "text",
    "units": "",
    "hint": "Check the sign of the first derivative on both sides.",
    "setup": "f′(x)=3x² is positive for x≠0.",
    "solution": "The function increases on both sides, so neither a local maximum nor minimum occurs. f″(0)=0 is inconclusive.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Locate domain-valid candidates",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-14",
    "hub": "critical",
    "subject": "Calculus I",
    "topic": "Critical points",
    "subtopic": "Absolute minimum on an interval",
    "title": "Absolute minimum on an interval",
    "prompt": "Find the minimum value of f(x)=x²−4x on [0,5].",
    "answer": [
      "-4"
    ],
    "kind": "number",
    "value": -4,
    "units": "",
    "hint": "Compare the critical point and endpoints.",
    "setup": "Solve 2x−4=0, then evaluate f at that input and at 0 and 5.",
    "solution": "The candidate is x=2. f(0)=0, f(2)=−4, f(5)=5. The minimum value is −4.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Locate domain-valid candidates",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-15",
    "hub": "critical",
    "subject": "Calculus I",
    "topic": "Critical points",
    "subtopic": "An undefined derivative",
    "title": "An undefined derivative",
    "prompt": "Is x=0 a critical number of f(x)=|x|?",
    "answer": [
      "yes"
    ],
    "kind": "text",
    "units": "",
    "hint": "Critical numbers can have an undefined derivative.",
    "setup": "Check that zero belongs to the function domain.",
    "solution": "Yes. f is defined at 0 and its derivative is not. The point is also a local minimum.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Locate domain-valid candidates",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-16",
    "hub": "critical",
    "subject": "Calculus I",
    "topic": "Critical points",
    "subtopic": "A constrained rectangle",
    "title": "A constrained rectangle",
    "prompt": "A rectangle has perimeter 20 m. What width maximizes its area?",
    "answer": [
      "5"
    ],
    "kind": "number",
    "value": 5,
    "units": "m",
    "hint": "Express area using one variable.",
    "setup": "If width is w, length is 10−w and A=w(10−w), 0<w<10.",
    "solution": "A′=10−2w=0 gives w=5 m. A″=−2<0, and the area approaches zero at the domain edges; the square maximizes area.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Integration",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Locate domain-valid candidates",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-17",
    "hub": "related",
    "subject": "Calculus I",
    "topic": "Related rates",
    "subtopic": "Filling a cylinder",
    "title": "Filling a cylinder",
    "prompt": "A cylindrical tank has fixed radius 2 m and fills at 3 m³/min. Find dh/dt in m/min.",
    "answer": [
      "0.238732414637843"
    ],
    "kind": "number",
    "value": 0.238732414637843,
    "units": "m/min",
    "hint": "Differentiate the volume-height relation.",
    "setup": "V=πr²h; r is constant, so dV/dt=πr² dh/dt.",
    "solution": "dh/dt=3/(4π)=0.2387 m/min. The rise slows for a larger cross-sectional area.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Build a geometric constraint",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8,
    "diagram": "tank"
  },
  {
    "id": "v2-18",
    "hub": "related",
    "subject": "Calculus I",
    "topic": "Related rates",
    "subtopic": "Expanding a sphere",
    "title": "Expanding a sphere",
    "prompt": "A sphere has r=2 cm and dr/dt=0.5 cm/s. Find dV/dt in cm³/s.",
    "answer": [
      "25.132741228718345"
    ],
    "kind": "number",
    "value": 25.132741228718345,
    "units": "cm^3/s",
    "hint": "Differentiate V=4πr³/3 with respect to time.",
    "setup": "dV/dt=4πr² dr/dt.",
    "solution": "Substitution gives 4π(2²)(0.5)=8π≈25.13 cm³/s.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Build a geometric constraint",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-19",
    "hub": "related",
    "subject": "Calculus I",
    "topic": "Related rates",
    "subtopic": "A moving shadow",
    "title": "A moving shadow",
    "prompt": "A 6 m lamp illuminates a 2 m person walking away at 1 m/s. Find the rate at which the shadow length grows.",
    "answer": [
      "0.5"
    ],
    "kind": "number",
    "value": 0.5,
    "units": "m/s",
    "hint": "Use similar triangles.",
    "setup": "Let x be lamp-to-person distance and s shadow length: 6/(x+s)=2/s.",
    "solution": "6s=2x+2s gives s=x/2. Differentiate: ds/dt=(1/2)dx/dt=0.5 m/s. The shadow-tip speed would be a different quantity.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Integration",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Build a geometric constraint",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-20",
    "hub": "related",
    "subject": "Calculus I",
    "topic": "Related rates",
    "subtopic": "Missing a rate",
    "title": "Missing a rate",
    "prompt": "A sphere has radius 3 m. Can its volume growth rate be calculated from this information alone?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "A geometric size is not a time derivative.",
    "setup": "dV/dt=4πr² dr/dt still contains a missing quantity.",
    "solution": "No. The instantaneous radius growth rate dr/dt, or equivalent information, is needed.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Missing information",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Build a geometric constraint",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-21",
    "hub": "vectors",
    "subject": "Physics I",
    "topic": "Vectors and components",
    "subtopic": "Magnitude from components",
    "title": "Magnitude from components",
    "prompt": "A displacement has components (3,4) m. Find its magnitude.",
    "answer": [
      "5"
    ],
    "kind": "number",
    "value": 5,
    "units": "m",
    "hint": "Use the Pythagorean relation.",
    "setup": "|r|=√(rₓ²+rᵧ²).",
    "solution": "√(3²+4²)=5 m. The magnitude is not the sum 7 m.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Resolve vectors",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-22",
    "hub": "vectors",
    "subject": "Physics I",
    "topic": "Vectors and components",
    "subtopic": "Vector addition",
    "title": "Vector addition",
    "prompt": "A=(2,−1) m and B=(−5,4) m. What is the x-component of A+B?",
    "answer": [
      "-3"
    ],
    "kind": "number",
    "value": -3,
    "units": "m",
    "hint": "Add like components only.",
    "setup": "(A+B)ₓ=Aₓ+Bₓ.",
    "solution": "2+(−5)=−3 m. The full result is (−3,3) m.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Resolve vectors",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-23",
    "hub": "vectors",
    "subject": "Physics I",
    "topic": "Vectors and components",
    "subtopic": "A dot product",
    "title": "A dot product",
    "prompt": "For dimensionless A=(1,2) and B=(3,−1), calculate A·B.",
    "answer": [
      "1"
    ],
    "kind": "number",
    "value": 1,
    "units": "",
    "hint": "Multiply corresponding components and add.",
    "setup": "A·B=1·3+2·(−1).",
    "solution": "The result is 3−2=1, a scalar.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Resolve vectors",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-24",
    "hub": "vectors",
    "subject": "Physics I",
    "topic": "Vectors and components",
    "subtopic": "A perpendicular pair",
    "title": "A perpendicular pair",
    "prompt": "Two nonzero vectors have a zero dot product. What angle in degrees separates them?",
    "answer": [
      "90"
    ],
    "kind": "number",
    "value": 90,
    "units": "deg",
    "hint": "Use A·B=|A||B|cosθ.",
    "setup": "Since both magnitudes are nonzero, cosθ must be zero.",
    "solution": "For the angle between vectors in [0°,180°], θ=90°.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Resolve vectors",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-25",
    "hub": "kinematics",
    "subject": "Physics I",
    "topic": "Kinematics",
    "subtopic": "Read a velocity graph",
    "title": "Read a velocity graph",
    "prompt": "Velocity increases linearly from 2 to 8 m/s over 3 s. Find displacement in that interval.",
    "answer": [
      "15"
    ],
    "kind": "number",
    "value": 15,
    "units": "m",
    "hint": "Find the area under the velocity-time line.",
    "setup": "For a linear change, average velocity is (v₀+v₁)/2.",
    "solution": "Δx=[(2+8)/2]·3=15 m. Both velocities are positive, so distance equals displacement here.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Graph interpretation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read motion graphs",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8,
    "diagram": "velocity"
  },
  {
    "id": "v2-26",
    "hub": "kinematics",
    "subject": "Physics I",
    "topic": "Kinematics",
    "subtopic": "Stopping distance",
    "title": "Stopping distance",
    "prompt": "A cart moves at 10 m/s and has constant acceleration −2 m/s². How far does it travel before stopping?",
    "answer": [
      "25"
    ],
    "kind": "number",
    "value": 25,
    "units": "m",
    "hint": "Use an equation without time.",
    "setup": "Set final v=0 in v²=v₀²+2aΔx.",
    "solution": "0=100−4Δx, so Δx=25 m. Acceleration opposes motion.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read motion graphs",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-27",
    "hub": "kinematics",
    "subject": "Physics I",
    "topic": "Kinematics",
    "subtopic": "Horizontal launch",
    "title": "Horizontal launch",
    "prompt": "A ball leaves a 20 m high platform horizontally at 5 m/s. Ignore drag and use g=10 m/s². Find horizontal range.",
    "answer": [
      "10"
    ],
    "kind": "number",
    "value": 10,
    "units": "m",
    "hint": "Find fall time from vertical motion first.",
    "setup": "20=½gt²; horizontal distance is vₓt.",
    "solution": "t=√(40/10)=2 s; range=5·2=10 m.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Integration",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read motion graphs",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-28",
    "hub": "forces",
    "subject": "Physics I",
    "topic": "Forces and free-body diagrams",
    "subtopic": "Static friction adjusts",
    "title": "Static friction adjusts",
    "prompt": "A stationary box experiences a 3 N horizontal push. Maximum static friction is 10 N. Find the magnitude of actual friction.",
    "answer": [
      "3"
    ],
    "kind": "number",
    "value": 3,
    "units": "N",
    "hint": "A stationary box has zero net horizontal force.",
    "setup": "Static friction takes the value needed up to its maximum.",
    "solution": "Actual friction is 3 N opposite the push, not 10 N.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Isolate a body",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-29",
    "hub": "forces",
    "subject": "Physics I",
    "topic": "Forces and free-body diagrams",
    "subtopic": "An accelerating elevator",
    "title": "An accelerating elevator",
    "prompt": "A 60 kg person accelerates upward at 2 m/s². Use g=10 m/s². Find the scale force.",
    "answer": [
      "720"
    ],
    "kind": "number",
    "value": 720,
    "units": "N",
    "hint": "Draw normal force up and weight down.",
    "setup": "N−mg=ma.",
    "solution": "N=m(g+a)=60(10+2)=720 N. It exceeds the 600 N resting value.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Isolate a body",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-30",
    "hub": "forces",
    "subject": "Physics I",
    "topic": "Forces and free-body diagrams",
    "subtopic": "Ideal connected masses",
    "title": "Ideal connected masses",
    "prompt": "Two blocks of 2 and 3 kg on a frictionless table are pulled together by an external 10 N force. Find their acceleration.",
    "answer": [
      "2"
    ],
    "kind": "number",
    "value": 2,
    "units": "m/s^2",
    "hint": "Use both blocks as one system.",
    "setup": "Fexternal=(m₁+m₂)a.",
    "solution": "a=10/5=2 m/s². Internal tension cancels in the combined balance.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Isolate a body",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-31",
    "hub": "forces",
    "subject": "Physics I",
    "topic": "Forces and free-body diagrams",
    "subtopic": "Third-law reasoning",
    "title": "Third-law reasoning",
    "prompt": "Are the normal force and weight on a stationary book a Newton third-law pair?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "A third-law pair acts on two different bodies.",
    "setup": "Identify the body acted on by each force.",
    "solution": "No. Both act on the book. The partner of the book’s weight is the book’s gravitational force on Earth.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Isolate a body",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-32",
    "hub": "circular",
    "subject": "Physics I",
    "topic": "Circular motion",
    "subtopic": "Uniform speed, changing velocity",
    "title": "Uniform speed, changing velocity",
    "prompt": "A particle moves at 4 m/s in a circle of radius 2 m. Find radial acceleration magnitude.",
    "answer": [
      "8"
    ],
    "kind": "number",
    "value": 8,
    "units": "m/s^2",
    "hint": "Use speed squared divided by radius.",
    "setup": "aᵣ=v²/r.",
    "solution": "aᵣ=16/2=8 m/s² inward.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Identify inward acceleration",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-33",
    "hub": "circular",
    "subject": "Physics I",
    "topic": "Circular motion",
    "subtopic": "A period",
    "title": "A period",
    "prompt": "A point travels around a 0.5 m radius circle at π m/s. Find its period.",
    "answer": [
      "1"
    ],
    "kind": "number",
    "value": 1,
    "units": "s",
    "hint": "One revolution covers one circumference.",
    "setup": "T=2πr/v.",
    "solution": "T=2π(0.5)/π=1 s.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Identify inward acceleration",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-34",
    "hub": "circular",
    "subject": "Physics I",
    "topic": "Circular motion",
    "subtopic": "Top of a loop",
    "title": "Top of a loop",
    "prompt": "A 1 kg mass moves at 5 m/s at the top of a vertical circle of radius 2 m. Use g=10 m/s². Find string tension.",
    "answer": [
      "2.5"
    ],
    "kind": "number",
    "value": 2.5,
    "units": "N",
    "hint": "Both gravity and tension point toward the center at the top.",
    "setup": "T+mg=mv²/r.",
    "solution": "T=25/2−10=2.5 N. The positive result is compatible with a taut string.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Integration",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Identify inward acceleration",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-35",
    "hub": "circular",
    "subject": "Physics I",
    "topic": "Circular motion",
    "subtopic": "The extra-force mistake",
    "title": "The extra-force mistake",
    "prompt": "A student draws weight, tension, and a separate centripetal force for a swinging bob. Explain what to fix.",
    "answer": [
      "Remove the separate centripetal-force arrow. Resolve the actual forces radially; their net inward component is mv²/r."
    ],
    "kind": "rubric",
    "units": "",
    "hint": "Centripetal describes the net radial requirement.",
    "setup": "Draw only forces due to physical interactions.",
    "solution": "Weight and tension are actual forces. Their radial components supply mv²/r; adding another arrow double counts that requirement.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Error analysis",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Identify inward acceleration",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-36",
    "hub": "energy",
    "subject": "Physics I",
    "topic": "Work, energy and springs",
    "subtopic": "Spring storage",
    "title": "Spring storage",
    "prompt": "A Hookean spring with k=200 N/m is compressed 0.10 m. Find stored energy.",
    "answer": [
      "1"
    ],
    "kind": "number",
    "value": 1,
    "units": "J",
    "hint": "Energy grows quadratically with deformation.",
    "setup": "Us=½kx².",
    "solution": "Us=0.5·200·0.10²=1 J. N/m times m² gives N·m=J.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Calculate work",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-37",
    "hub": "energy",
    "subject": "Physics I",
    "topic": "Work, energy and springs",
    "subtopic": "Work at an angle",
    "title": "Work at an angle",
    "prompt": "A constant 10 N force acts at 60° to a displacement of 3 m. Find its work.",
    "answer": [
      "15"
    ],
    "kind": "number",
    "value": 15,
    "units": "J",
    "hint": "Only the component along displacement does work.",
    "setup": "W=Fd cosθ.",
    "solution": "W=10·3·cos60°=15 J.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Calculate work",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-38",
    "hub": "energy",
    "subject": "Physics I",
    "topic": "Work, energy and springs",
    "subtopic": "Frictional energy loss",
    "title": "Frictional energy loss",
    "prompt": "A 2 kg block moving at 4 m/s slides on a surface with constant 4 N friction until stopping. Find stopping distance.",
    "answer": [
      "4"
    ],
    "kind": "number",
    "value": 4,
    "units": "m",
    "hint": "Initial kinetic energy is dissipated by friction.",
    "setup": "½mv₀²=fd.",
    "solution": "Initial K=16 J. Thus d=16/4=4 m; friction does −16 J of work.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Calculate work",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-39",
    "hub": "energy",
    "subject": "Physics I",
    "topic": "Work, energy and springs",
    "subtopic": "Potential slope",
    "title": "Potential slope",
    "prompt": "U(x)=3x² J when x is in meters. Find Fₓ at x=2 m, with coefficient units chosen consistently.",
    "answer": [
      "-12"
    ],
    "kind": "number",
    "value": -12,
    "units": "N",
    "hint": "Force is the negative potential-energy slope.",
    "setup": "Fₓ=−dU/dx=−6x.",
    "solution": "At x=2 m, Fₓ=−12 N. J/m equals N.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Calculate work",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-40",
    "hub": "momentum",
    "subject": "Physics I",
    "topic": "Impulse and collisions",
    "subtopic": "Impulse from a pulse",
    "title": "Impulse from a pulse",
    "prompt": "A constant 12 N net force acts in +x for 0.25 s. Find impulse.",
    "answer": [
      "3"
    ],
    "kind": "number",
    "value": 3,
    "units": "N*s",
    "hint": "Find force-time area.",
    "setup": "J=FΔt.",
    "solution": "J=12·0.25=3 N·s in +x.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Use force-time area",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-41",
    "hub": "momentum",
    "subject": "Physics I",
    "topic": "Impulse and collisions",
    "subtopic": "Reversing a ball",
    "title": "Reversing a ball",
    "prompt": "A 0.2 kg ball changes velocity from +5 to −5 m/s. Find signed impulse.",
    "answer": [
      "-2"
    ],
    "kind": "number",
    "value": -2,
    "units": "N*s",
    "hint": "Final minus initial velocity is essential.",
    "setup": "J=m(vf−vi).",
    "solution": "J=0.2(−5−5)=−2 N·s. The reversal doubles the speed difference.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Use force-time area",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-42",
    "hub": "momentum",
    "subject": "Physics I",
    "topic": "Impulse and collisions",
    "subtopic": "Opposing carts stick",
    "title": "Opposing carts stick",
    "prompt": "A 2 kg cart at +4 m/s sticks to a 2 kg cart at −2 m/s. Find final velocity.",
    "answer": [
      "1"
    ],
    "kind": "number",
    "value": 1,
    "units": "m/s",
    "hint": "Conserve signed total momentum.",
    "setup": "vf=(m₁v₁+m₂v₂)/(m₁+m₂).",
    "solution": "vf=(8−4)/4=1 m/s. Initial K=20 J and final K=2 J, so kinetic energy is not conserved.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Use force-time area",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-43",
    "hub": "momentum",
    "subject": "Physics I",
    "topic": "Impulse and collisions",
    "subtopic": "Elastic equal masses",
    "title": "Elastic equal masses",
    "prompt": "In a one-dimensional elastic collision, a moving cart hits an identical stationary cart. The first stops. What fraction of its initial speed does the second have?",
    "answer": [
      "1"
    ],
    "kind": "number",
    "value": 1,
    "units": "",
    "hint": "Use momentum with equal masses.",
    "setup": "mvi=mvf for the moving final cart.",
    "solution": "The second has the full initial speed: fraction 1. This also satisfies kinetic-energy conservation.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Use force-time area",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-44",
    "hub": "rotation",
    "subject": "Physics I",
    "topic": "Rotational motion and inertia",
    "subtopic": "RPM conversion",
    "title": "RPM conversion",
    "prompt": "Convert 60 rpm to angular speed in rad/s.",
    "answer": [
      "6.283185307179586"
    ],
    "kind": "number",
    "value": 6.283185307179586,
    "units": "rad/s",
    "hint": "Convert revolutions to radians and minutes to seconds.",
    "setup": "ω=60 rev/min ×2π rad/rev ÷60 s/min.",
    "solution": "ω=2π≈6.283 rad/s.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Convert rpm to rad/s",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-45",
    "hub": "rotation",
    "subject": "Physics I",
    "topic": "Rotational motion and inertia",
    "subtopic": "Uniform disk inertia",
    "title": "Uniform disk inertia",
    "prompt": "Find I for a uniform disk of mass 4 kg and radius 0.5 m about its central perpendicular axis. Use I=½MR².",
    "answer": [
      "0.5"
    ],
    "kind": "number",
    "value": 0.5,
    "units": "kg*m^2",
    "hint": "Use radius, not diameter.",
    "setup": "Substitute into ½MR².",
    "solution": "I=0.5·4·0.5²=0.5 kg·m².",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Convert rpm to rad/s",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-46",
    "hub": "rotation",
    "subject": "Physics I",
    "topic": "Rotational motion and inertia",
    "subtopic": "Shift the axis",
    "title": "Shift the axis",
    "prompt": "An object has Icm=0.2 kg·m² and mass 2 kg. Find I about a parallel axis 0.3 m away.",
    "answer": [
      "0.38"
    ],
    "kind": "number",
    "value": 0.38,
    "units": "kg*m^2",
    "hint": "The shifted-axis inertia must increase.",
    "setup": "I=Icm+Md².",
    "solution": "I=0.2+2·0.3²=0.38 kg·m².",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Convert rpm to rad/s",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-47",
    "hub": "rotation",
    "subject": "Physics I",
    "topic": "Rotational motion and inertia",
    "subtopic": "Rolling energy",
    "title": "Rolling energy",
    "prompt": "A 2 kg uniform solid disk rolls without slipping at 3 m/s. Find total kinetic energy. I=½MR².",
    "answer": [
      "13.5"
    ],
    "kind": "number",
    "value": 13.5,
    "units": "J",
    "hint": "Include both motion of the center and rotation.",
    "setup": "K=½Mv²+½I(v/R)².",
    "solution": "K=½Mv²+¼Mv²=¾Mv²=13.5 J. Radius cancels for this specified geometry.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Integration",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Convert rpm to rad/s",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-48",
    "hub": "rotation",
    "subject": "Physics I",
    "topic": "Rotational motion and inertia",
    "subtopic": "Spin-down angle",
    "title": "Spin-down angle",
    "prompt": "A rotor slows uniformly from 10 rad/s to rest with α=−2 rad/s². Find angular displacement.",
    "answer": [
      "25"
    ],
    "kind": "number",
    "value": 25,
    "units": "rad",
    "hint": "Use angular kinematics without time.",
    "setup": "ωf²=ωi²+2αΔθ.",
    "solution": "0=100−4Δθ, so Δθ=25 rad.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Convert rpm to rad/s",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-49",
    "hub": "torque",
    "subject": "Physics I",
    "topic": "Torque and rotational dynamics",
    "subtopic": "A perpendicular wrench",
    "title": "A perpendicular wrench",
    "prompt": "A 20 N force acts perpendicular to a wrench 0.25 m from the pivot. Find torque magnitude.",
    "answer": [
      "5"
    ],
    "kind": "number",
    "value": 5,
    "units": "N*m",
    "hint": "The perpendicular arm is the full radius here.",
    "setup": "τ=rF sin90°.",
    "solution": "τ=0.25·20=5 N·m.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Choose an efficient pivot",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-50",
    "hub": "torque",
    "subject": "Physics I",
    "topic": "Torque and rotational dynamics",
    "subtopic": "An angled wrench",
    "title": "An angled wrench",
    "prompt": "A 40 N force makes 30° with a 0.20 m position vector from a pivot. Find torque magnitude.",
    "answer": [
      "4"
    ],
    "kind": "number",
    "value": 4,
    "units": "N*m",
    "hint": "Use the angle between r and F.",
    "setup": "τ=rF sinθ.",
    "solution": "τ=0.20·40·0.5=4 N·m.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Choose an efficient pivot",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-51",
    "hub": "torque",
    "subject": "Physics I",
    "topic": "Torque and rotational dynamics",
    "subtopic": "Balance a beam",
    "title": "Balance a beam",
    "prompt": "A massless beam pivots at its center. A 30 N downward load is 2 m left of the pivot. What downward load 3 m right balances torque?",
    "answer": [
      "20"
    ],
    "kind": "number",
    "value": 20,
    "units": "N",
    "hint": "Opposite sides produce opposite moments.",
    "setup": "30·2=F·3.",
    "solution": "F=20 N. The support must additionally supply 50 N upward for force equilibrium.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Choose an efficient pivot",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-52",
    "hub": "torque",
    "subject": "Physics I",
    "topic": "Torque and rotational dynamics",
    "subtopic": "Torque to acceleration",
    "title": "Torque to acceleration",
    "prompt": "A rigid rotor has I=0.5 kg·m² and net torque +2 N·m. Find angular acceleration.",
    "answer": [
      "4"
    ],
    "kind": "number",
    "value": 4,
    "units": "rad/s^2",
    "hint": "Use the rotational counterpart of Newton’s second law.",
    "setup": "α=τnet/I.",
    "solution": "α=2/0.5=4 rad/s², positive in the chosen torque direction.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Choose an efficient pivot",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-53",
    "hub": "torque",
    "subject": "Physics I",
    "topic": "Torque and rotational dynamics",
    "subtopic": "A massive pulley",
    "title": "A massive pulley",
    "prompt": "A 2 kg mass falls on a non-slipping cord wound around a uniform disk of mass 4 kg. The disk axis is frictionless. Use g=10 m/s². Find the mass’s acceleration.",
    "answer": [
      "5"
    ],
    "kind": "number",
    "value": 5,
    "units": "m/s^2",
    "hint": "Combine mg−T=ma with TR=Iα.",
    "setup": "I=½MR² and α=a/R imply T=½Ma.",
    "solution": "mg=(m+M/2)a, so a=20/(2+2)=5 m/s² downward. It is less than g because energy also spins the disk.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Integration",
    "type": "Calculation",
    "minutes": 7,
    "source": "Original practice • Original introductory practice",
    "objective": "Choose an efficient pivot",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-54",
    "hub": "structure",
    "subject": "Organic Chemistry I",
    "topic": "Structure, bonding and orbitals",
    "subtopic": "Formal charge on nitrogen",
    "title": "Formal charge on nitrogen",
    "prompt": "Nitrogen has four single bonds and no lone pairs. What is its formal charge?",
    "answer": [
      "1"
    ],
    "kind": "number",
    "value": 1,
    "units": "",
    "hint": "Neutral nitrogen has five valence electrons.",
    "setup": "FC=5−0−½(8).",
    "solution": "The formal charge is +1. Four bonds assign four electrons to nitrogen for bookkeeping.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read condensed and skeletal structures",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-55",
    "hub": "structure",
    "subject": "Organic Chemistry I",
    "topic": "Structure, bonding and orbitals",
    "subtopic": "A triple bond",
    "title": "A triple bond",
    "prompt": "How many π bonds are present in one C≡C triple bond?",
    "answer": [
      "2"
    ],
    "kind": "number",
    "value": 2,
    "units": "",
    "hint": "A multiple bond still has only one σ bond.",
    "setup": "Decompose the triple bond into σ and π contributions.",
    "solution": "A triple bond contains one σ and two π bonds.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read condensed and skeletal structures",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-56",
    "hub": "structure",
    "subject": "Organic Chemistry I",
    "topic": "Structure, bonding and orbitals",
    "subtopic": "Carbonyl hybridization",
    "title": "Carbonyl hybridization",
    "prompt": "What is the idealized hybridization of the carbonyl carbon in acetone?",
    "answer": [
      "sp2",
      "sp^2",
      "sp²"
    ],
    "kind": "text",
    "units": "",
    "hint": "Count electron regions around the carbon.",
    "setup": "The double bond counts as one region and the two single bonds as two more.",
    "solution": "Three electron regions give trigonal-planar geometry and sp² hybridization.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read condensed and skeletal structures",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-57",
    "hub": "structure",
    "subject": "Organic Chemistry I",
    "topic": "Structure, bonding and orbitals",
    "subtopic": "Molecular polarity",
    "title": "Molecular polarity",
    "prompt": "CO₂ has polar C=O bonds. Is its net dipole nonzero in its linear equilibrium geometry?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Add bond dipoles as vectors.",
    "setup": "Two equal opposite dipoles lie on the same line.",
    "solution": "No. They cancel by symmetry. Polar bonds do not guarantee a polar molecule.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read condensed and skeletal structures",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-58",
    "hub": "groups",
    "subject": "Organic Chemistry I",
    "topic": "Functional groups and naming",
    "subtopic": "Amide or amine",
    "title": "Amide or amine",
    "prompt": "Classify CH₃–C(=O)–NH₂ by its principal functional group.",
    "answer": [
      "amide"
    ],
    "kind": "text",
    "units": "",
    "hint": "Check whether nitrogen is directly bonded to a carbonyl carbon.",
    "setup": "Identify C(=O)–N connectivity.",
    "solution": "This is an amide, not an amine: nitrogen is directly attached to the carbonyl carbon.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Distinguish carbonyl families",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-59",
    "hub": "groups",
    "subject": "Organic Chemistry I",
    "topic": "Functional groups and naming",
    "subtopic": "A nitrile",
    "title": "A nitrile",
    "prompt": "Name the functional group in CH₃–C≡N.",
    "answer": [
      "nitrile"
    ],
    "kind": "text",
    "units": "",
    "hint": "A carbon–nitrogen triple bond has its own group name.",
    "setup": "Distinguish C≡N from C≡C.",
    "solution": "The group is a nitrile. An alkyne contains a carbon–carbon triple bond instead.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Distinguish carbonyl families",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-60",
    "hub": "groups",
    "subject": "Organic Chemistry I",
    "topic": "Functional groups and naming",
    "subtopic": "Name a simple alcohol",
    "title": "Name a simple alcohol",
    "prompt": "Give the IUPAC name of CH₃–CH(OH)–CH₂–CH₃.",
    "answer": [
      "butan-2-ol",
      "2-butanol"
    ],
    "kind": "text",
    "units": "",
    "hint": "Use the four-carbon parent and the lowest OH locant.",
    "setup": "Number from the end nearest OH.",
    "solution": "The parent is butane and OH is at carbon 2: butan-2-ol.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Distinguish carbonyl families",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-61",
    "hub": "groups",
    "subject": "Organic Chemistry I",
    "topic": "Functional groups and naming",
    "subtopic": "Phenol recognition",
    "title": "Phenol recognition",
    "prompt": "Is OH directly attached to a benzene ring classified as a phenol or an ordinary aliphatic alcohol?",
    "answer": [
      "phenol"
    ],
    "kind": "text",
    "units": "",
    "hint": "The attached carbon is aromatic.",
    "setup": "Use the aromatic OH family name.",
    "solution": "It is a phenol. Its acidity and reactivity differ from those of ordinary aliphatic alcohols.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Distinguish carbonyl families",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-62",
    "hub": "resonance",
    "subject": "Organic Chemistry I",
    "topic": "Resonance and electron bookkeeping",
    "subtopic": "Atoms must stay put",
    "title": "Atoms must stay put",
    "prompt": "Two proposed structures differ by moving a hydrogen atom to another carbon. Are they resonance contributors?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Resonance moves electrons, not nuclei.",
    "setup": "Check whether all atom positions and connectivity remain fixed.",
    "solution": "No. Moving hydrogen changes the atomic arrangement. Such structures may be tautomers or other isomers, but are not resonance contributors.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Identify valid contributors",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-63",
    "hub": "resonance",
    "subject": "Organic Chemistry I",
    "topic": "Resonance and electron bookkeeping",
    "subtopic": "Equivalent carboxylate bonds",
    "title": "Equivalent carboxylate bonds",
    "prompt": "In an isolated carboxylate group with equivalent oxygen environments, are the two C–O bonds equivalent or one permanently single and one double?",
    "answer": [
      "equivalent",
      "equivalent bonds"
    ],
    "kind": "text",
    "units": "",
    "hint": "Consider the resonance hybrid.",
    "setup": "Equivalent contributors place the formal double bond on opposite oxygens.",
    "solution": "The hybrid has equivalent C–O bonds with bond orders intermediate between single and double.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Identify valid contributors",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-64",
    "hub": "resonance",
    "subject": "Organic Chemistry I",
    "topic": "Resonance and electron bookkeeping",
    "subtopic": "Charge conservation",
    "title": "Charge conservation",
    "prompt": "A species has net charge −1. Can a valid resonance contributor have net charge 0?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Total electron count is unchanged.",
    "setup": "Sum all formal charges in each contributor.",
    "solution": "No. All valid contributors must preserve the net −1 charge.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Identify valid contributors",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-65",
    "hub": "resonance",
    "subject": "Organic Chemistry I",
    "topic": "Resonance and electron bookkeeping",
    "subtopic": "Arrow origin",
    "title": "Arrow origin",
    "prompt": "In protonation of an amine, should the electron-pair arrow begin at the nitrogen lone pair or at the proton?",
    "answer": [
      "nitrogen lone pair",
      "lone pair"
    ],
    "kind": "text",
    "units": "",
    "hint": "Curved arrows track electrons.",
    "setup": "Locate the electron donor before drawing the arrow.",
    "solution": "It begins at the nitrogen lone pair and points toward H. A second arrow breaks the acid’s H–A bond toward A.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Identify valid contributors",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-66",
    "hub": "acids",
    "subject": "Organic Chemistry I",
    "topic": "Acids, bases and pKa",
    "subtopic": "Speciation ratio",
    "title": "Speciation ratio",
    "prompt": "For HA with pKa=5 at pH=7, find [A⁻]/[HA].",
    "answer": [
      "100"
    ],
    "kind": "number",
    "value": 100,
    "units": "",
    "hint": "Rearrange Henderson–Hasselbalch.",
    "setup": "[A⁻]/[HA]=10^(pH−pKa).",
    "solution": "The ratio is 10²=100. Base form dominates under the stated concentration approximation.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Compare acid strengths",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-67",
    "hub": "acids",
    "subject": "Organic Chemistry I",
    "topic": "Acids, bases and pKa",
    "subtopic": "Half deprotonated",
    "title": "Half deprotonated",
    "prompt": "At pH=pKa, what fraction of HA plus A⁻ is A⁻?",
    "answer": [
      "0.5"
    ],
    "kind": "number",
    "value": 0.5,
    "units": "",
    "hint": "The ratio of base to acid is unity.",
    "setup": "Fraction=[A⁻]/([HA]+[A⁻]).",
    "solution": "Equal concentrations imply fraction 1/(1+1)=0.5, or 50%.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Compare acid strengths",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-68",
    "hub": "acids",
    "subject": "Organic Chemistry I",
    "topic": "Acids, bases and pKa",
    "subtopic": "Equilibrium from pKa",
    "title": "Equilibrium from pKa",
    "prompt": "HA + B ⇌ A⁻ + BH⁺. Given pKa(HA)=5 and pKa(BH⁺)=10 in the same solvent, estimate Keq.",
    "answer": [
      "100000"
    ],
    "kind": "number",
    "value": 100000,
    "units": "",
    "hint": "The difference is conjugate-acid pKa minus reactant-acid pKa.",
    "setup": "Keq≈10^(10−5).",
    "solution": "Keq≈100000, so products are favored. This is an equilibrium estimate, not a rate prediction.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Compare acid strengths",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-69",
    "hub": "acids",
    "subject": "Organic Chemistry I",
    "topic": "Acids, bases and pKa",
    "subtopic": "Stronger acid",
    "title": "Stronger acid",
    "prompt": "Acid A has pKa=4 and acid B has pKa=10 in the same solvent. Which is stronger?",
    "answer": [
      "a",
      "acid a"
    ],
    "kind": "text",
    "units": "",
    "hint": "Lower pKa corresponds to larger Ka.",
    "setup": "Compare the values on the same solvent scale.",
    "solution": "Acid A is stronger. Its Ka is about 10⁶ times that of B.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Compare acid strengths",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-70",
    "hub": "acids",
    "subject": "Organic Chemistry I",
    "topic": "Acids, bases and pKa",
    "subtopic": "Electron-pair definitions",
    "title": "Electron-pair definitions",
    "prompt": "An electron-pair acceptor is a Lewis acid or a Lewis base?",
    "answer": [
      "lewis acid",
      "acid"
    ],
    "kind": "text",
    "units": "",
    "hint": "Think of accepting a pair into a new bond.",
    "setup": "Separate the Lewis electron-pair definition from the proton-only definition.",
    "solution": "It is a Lewis acid. A Lewis base donates an electron pair.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Compare acid strengths",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-71",
    "hub": "conformations",
    "subject": "Organic Chemistry I",
    "topic": "Conformations and intermolecular forces",
    "subtopic": "Butane anti",
    "title": "Butane anti",
    "prompt": "What is the methyl-to-methyl dihedral angle in anti butane, in degrees?",
    "answer": [
      "180"
    ],
    "kind": "number",
    "value": 180,
    "units": "deg",
    "hint": "Anti places the largest groups opposite.",
    "setup": "View along the central C–C bond.",
    "solution": "The dihedral angle is 180°, maximizing separation between the methyl groups in this staggered conformer.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Interpret Newman projections",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-72",
    "hub": "conformations",
    "subject": "Organic Chemistry I",
    "topic": "Conformations and intermolecular forces",
    "subtopic": "A hydrogen-bond donor",
    "title": "A hydrogen-bond donor",
    "prompt": "Can dimethyl ether donate a conventional O–H hydrogen bond to another ether molecule?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Look for a hydrogen attached directly to oxygen.",
    "setup": "CH₃–O–CH₃ has oxygen lone pairs but no O–H bond.",
    "solution": "No. It can accept hydrogen bonds from a donor, but it cannot donate an O–H hydrogen bond itself.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Interpret Newman projections",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-73",
    "hub": "conformations",
    "subject": "Organic Chemistry I",
    "topic": "Conformations and intermolecular forces",
    "subtopic": "Configuration or conformation",
    "title": "Configuration or conformation",
    "prompt": "Anti and gauche butane differ by ordinary single-bond rotation. Are they conformations or configurations?",
    "answer": [
      "conformations",
      "conformers"
    ],
    "kind": "text",
    "units": "",
    "hint": "No bond must be broken to interconvert them.",
    "setup": "Classify ordinary rotation about the central single bond.",
    "solution": "They are conformations. Different configurations require a different stereochemical arrangement not removed by ordinary single-bond rotation.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Interpret Newman projections",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-74",
    "hub": "conformations",
    "subject": "Organic Chemistry I",
    "topic": "Conformations and intermolecular forces",
    "subtopic": "A boiling-point comparison",
    "title": "A boiling-point comparison",
    "prompt": "Ethanol and dimethyl ether have the same formula. Which generally has the higher boiling point?",
    "answer": [
      "ethanol"
    ],
    "kind": "text",
    "units": "",
    "hint": "Compare intermolecular hydrogen bonding.",
    "setup": "Ethanol has both O–H donor ability and oxygen acceptor ability.",
    "solution": "Ethanol generally boils higher because it forms a stronger self-associated hydrogen-bond network; mass alone cannot explain the difference.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Interpret Newman projections",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-75",
    "hub": "stereo",
    "subject": "Organic Chemistry I",
    "topic": "Chirality, E/Z and R/S",
    "subtopic": "CIP atomic-number priority",
    "title": "CIP atomic-number priority",
    "prompt": "Rank the highest-priority substituent at a stereocenter among Br, Cl, O and H.",
    "answer": [
      "br",
      "bromine"
    ],
    "kind": "text",
    "units": "",
    "hint": "Compare directly attached atomic numbers.",
    "setup": "Br=35, Cl=17, O=8, H=1.",
    "solution": "Br has highest priority. CIP begins with atomic number, not electronegativity.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Assign CIP priorities",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-76",
    "hub": "stereo",
    "subject": "Organic Chemistry I",
    "topic": "Chirality, E/Z and R/S",
    "subtopic": "Enantiomeric excess",
    "title": "Enantiomeric excess",
    "prompt": "A mixture contains 80% R and 20% S of one enantiomer pair. Calculate ee as a percentage.",
    "answer": [
      "60"
    ],
    "kind": "number",
    "value": 60,
    "units": "%",
    "hint": "Subtract the minority percentage from the majority.",
    "setup": "ee=|%R−%S|.",
    "solution": "ee=|80−20|=60%, in favor of R. This does not say whether its optical rotation is positive or negative.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Assign CIP priorities",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-77",
    "hub": "stereo",
    "subject": "Organic Chemistry I",
    "topic": "Chirality, E/Z and R/S",
    "subtopic": "No E/Z label",
    "title": "No E/Z label",
    "prompt": "Can CH₂=CH–CH₃ receive an E or Z label?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Check both substituents on each double-bond carbon.",
    "setup": "The terminal carbon carries two identical hydrogens.",
    "solution": "No. Each alkene carbon must have two different substituents; the CH₂ end fails this condition.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Assign CIP priorities",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-78",
    "hub": "stereo",
    "subject": "Organic Chemistry I",
    "topic": "Chirality, E/Z and R/S",
    "subtopic": "A meso possibility",
    "title": "A meso possibility",
    "prompt": "Does having two stereocenters guarantee that a molecule is chiral?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Consider internal symmetry.",
    "setup": "A meso structure can contain stereocenters but be superimposable on its mirror image.",
    "solution": "No. An appropriate internal symmetry can make the whole molecule achiral despite two stereocenters.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Assign CIP priorities",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-79",
    "hub": "reactions",
    "subject": "Organic Chemistry I",
    "topic": "Reaction energy and alkene chemistry",
    "subtopic": "Catalyst and equilibrium",
    "title": "Catalyst and equilibrium",
    "prompt": "At fixed temperature, does a catalyst change the equilibrium constant?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Separate the barrier from endpoint free energies.",
    "setup": "K depends on ΔG°, whereas a catalyst changes the pathway.",
    "solution": "No. A catalyst accelerates approach to equilibrium by lowering kinetic barriers without changing ΔG° or K.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read reaction-energy diagrams",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-80",
    "hub": "reactions",
    "subject": "Organic Chemistry I",
    "topic": "Reaction energy and alkene chemistry",
    "subtopic": "Local barriers",
    "title": "Local barriers",
    "prompt": "A two-step profile has energies R=0, TS1=40, intermediate=10, TS2=60, product=−20 kJ/mol. What is the forward barrier for step 2?",
    "answer": [
      "50"
    ],
    "kind": "number",
    "value": 50,
    "units": "kJ/mol",
    "hint": "Measure from the preceding minimum, not from the initial reactant.",
    "setup": "Barrier₂=E(TS2)−E(intermediate).",
    "solution": "60−10=50 kJ/mol. Step 1 has a 40 kJ/mol barrier; comparing local barriers matters.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Graph interpretation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read reaction-energy diagrams",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8,
    "diagram": "reaction"
  },
  {
    "id": "v2-81",
    "hub": "reactions",
    "subject": "Organic Chemistry I",
    "topic": "Reaction energy and alkene chemistry",
    "subtopic": "Hydroboration product",
    "title": "Hydroboration product",
    "prompt": "Propene undergoes 1) BH₃/THF then 2) H₂O₂, OH⁻. Name the major alcohol.",
    "answer": [
      "propan-1-ol",
      "1-propanol"
    ],
    "kind": "text",
    "units": "",
    "hint": "Hydroboration–oxidation places OH at the less substituted carbon.",
    "setup": "Follow anti-Markovnikov regiochemistry; no free carbocation is required.",
    "solution": "The major product is propan-1-ol. Net addition is syn; this simple product has no stereocenter.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read reaction-energy diagrams",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-82",
    "hub": "reactions",
    "subject": "Organic Chemistry I",
    "topic": "Reaction energy and alkene chemistry",
    "subtopic": "Hydration product",
    "title": "Hydration product",
    "prompt": "Propene reacts with dilute aqueous acid under ordinary acid-catalyzed hydration conditions. Name the major alcohol.",
    "answer": [
      "propan-2-ol",
      "2-propanol",
      "isopropanol"
    ],
    "kind": "text",
    "units": "",
    "hint": "Consider which protonation gives the more stable carbocation.",
    "setup": "Place the carbocation at the more substituted carbon, then add water and deprotonate.",
    "solution": "The major alcohol is propan-2-ol. This is Markovnikov hydration; other substrates can rearrange.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read reaction-energy diagrams",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-83",
    "hub": "reactions",
    "subject": "Organic Chemistry I",
    "topic": "Reaction energy and alkene chemistry",
    "subtopic": "Ozonolysis connectivity",
    "title": "Ozonolysis connectivity",
    "prompt": "Symmetric but-2-ene undergoes ozone followed by dimethyl sulfide workup. Name the carbonyl product.",
    "answer": [
      "ethanal",
      "acetaldehyde"
    ],
    "kind": "text",
    "units": "",
    "hint": "Cut the alkene bond and give each alkene carbon a C=O bond.",
    "setup": "Each alkene carbon originally has H and CH₃ attached.",
    "solution": "Two molecules of ethanal form per molecule of but-2-ene under the stated reductive workup.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read reaction-energy diagrams",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-84",
    "hub": "reactions",
    "subject": "Organic Chemistry I",
    "topic": "Reaction energy and alkene chemistry",
    "subtopic": "Temperature and spontaneity",
    "title": "Temperature and spontaneity",
    "prompt": "A model reaction has ΔH=20 kJ/mol and ΔS=100 J/(mol·K), treated constant. At what temperature is ΔG=0?",
    "answer": [
      "200"
    ],
    "kind": "number",
    "value": 200,
    "units": "K",
    "hint": "Convert energy units before dividing.",
    "setup": "0=ΔH−TΔS, so T=ΔH/ΔS.",
    "solution": "T=20000/100=200 K. Above this temperature the model predicts ΔG<0; this does not determine the reaction speed.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • Original introductory practice",
    "objective": "Read reaction-energy diagrams",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-109",
    "hub": "functions",
    "subject": "Calculus I",
    "topic": "Functions, exponentials and logarithms",
    "subtopic": "Logarithm domain",
    "title": "Logarithm domain",
    "prompt": "For real f(x)=ln(x−2), is x=1 in the domain?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "The logarithm argument must be positive.",
    "setup": "Solve x−2>0.",
    "solution": "The domain is x>2, so x=1 is excluded.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Find domains",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-110",
    "hub": "functions",
    "subject": "Calculus I",
    "topic": "Functions, exponentials and logarithms",
    "subtopic": "An exponential equation",
    "title": "An exponential equation",
    "prompt": "Solve e^(2x)=e^6 for x.",
    "answer": [
      "3"
    ],
    "kind": "number",
    "value": 3,
    "units": "",
    "hint": "The real exponential is one-to-one.",
    "setup": "Equate the exponents.",
    "solution": "2x=6, so x=3. Substitution recovers e⁶.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Find domains",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-111",
    "hub": "functions",
    "subject": "Calculus I",
    "topic": "Functions, exponentials and logarithms",
    "subtopic": "Inverse evaluation",
    "title": "Inverse evaluation",
    "prompt": "For f(x)=3x+2, find f⁻¹(11).",
    "answer": [
      "3"
    ],
    "kind": "number",
    "value": 3,
    "units": "",
    "hint": "Find the input that produces 11.",
    "setup": "Solve 3x+2=11.",
    "solution": "x=(11−2)/3=3. The inverse reverses the original mapping.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Find domains",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-112",
    "hub": "functions",
    "subject": "Calculus I",
    "topic": "Functions, exponentials and logarithms",
    "subtopic": "Logarithmic differentiation at a point",
    "title": "Logarithmic differentiation at a point",
    "prompt": "Find f′(2) for f(x)=ln(x²+1).",
    "answer": [
      "0.8"
    ],
    "kind": "number",
    "value": 0.8,
    "units": "",
    "hint": "Apply the chain rule to the logarithm.",
    "setup": "f′(x)=2x/(x²+1).",
    "solution": "At x=2, f′=4/5=0.8.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus Volume 1 + your requested topics",
    "objective": "Find domains",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-113",
    "hub": "approximation",
    "subject": "Calculus I",
    "topic": "Approximation and mean value theorem",
    "subtopic": "Estimate a square root",
    "title": "Estimate a square root",
    "prompt": "Use the tangent approximation at x=4 to estimate √4.1.",
    "answer": [
      "2.025"
    ],
    "kind": "number",
    "value": 2.025,
    "units": "",
    "hint": "Use f(4) and f′(4).",
    "setup": "L(x)=2+(1/4)(x−4).",
    "solution": "L(4.1)=2+0.025=2.025. Since √x is concave down, the tangent estimate is high.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Linear approximation",
    "objective": "Build a tangent estimate",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-114",
    "hub": "approximation",
    "subject": "Calculus I",
    "topic": "Approximation and mean value theorem",
    "subtopic": "A mean-value point",
    "title": "A mean-value point",
    "prompt": "For f(x)=x² on [1,3], find the MVT point c.",
    "answer": [
      "2"
    ],
    "kind": "number",
    "value": 2,
    "units": "",
    "hint": "Match the derivative to the secant slope.",
    "setup": "2c=(9−1)/(3−1).",
    "solution": "2c=4 gives c=2, inside (1,3). The polynomial satisfies the theorem’s hypotheses.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Linear approximation",
    "objective": "Build a tangent estimate",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-115",
    "hub": "approximation",
    "subject": "Calculus I",
    "topic": "Approximation and mean value theorem",
    "subtopic": "The corner blocks the theorem",
    "title": "The corner blocks the theorem",
    "prompt": "Does f(x)=|x| satisfy all MVT hypotheses on [−1,1]?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Continuity alone is not enough.",
    "setup": "Inspect differentiability at zero.",
    "solution": "No. f is continuous but not differentiable at the interior point zero.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Linear approximation",
    "objective": "Build a tangent estimate",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-116",
    "hub": "approximation",
    "subject": "Calculus I",
    "topic": "Approximation and mean value theorem",
    "subtopic": "One Newton step",
    "title": "One Newton step",
    "prompt": "Use Newton’s method once for f(x)=x²−2 starting at x₀=1. What is x₁?",
    "answer": [
      "1.5"
    ],
    "kind": "number",
    "value": 1.5,
    "units": "",
    "hint": "Use the tangent-line root.",
    "setup": "x₁=x₀−f(x₀)/f′(x₀).",
    "solution": "x₁=1−(−1)/2=1.5. This is an iterate, not the exact root.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Linear approximation",
    "objective": "Build a tangent estimate",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-117",
    "hub": "integration",
    "subject": "Calculus I",
    "topic": "Integrals, substitution and the FTC",
    "subtopic": "A polynomial area",
    "title": "A polynomial area",
    "prompt": "Evaluate ∫ from 0 to 2 of 3x² dx.",
    "answer": [
      "8"
    ],
    "kind": "number",
    "value": 8,
    "units": "",
    "hint": "Find an antiderivative and subtract endpoints.",
    "setup": "An antiderivative is x³.",
    "solution": "[x³]₀²=8−0=8.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Fundamental Theorem",
    "objective": "Evaluate definite integrals",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-118",
    "hub": "integration",
    "subject": "Calculus I",
    "topic": "Integrals, substitution and the FTC",
    "subtopic": "FTC with a moving bound",
    "title": "FTC with a moving bound",
    "prompt": "F(x)=∫ from 0 to x² of cos(t) dt. Find F′(0).",
    "answer": [
      "0"
    ],
    "kind": "number",
    "value": 0,
    "units": "",
    "hint": "The upper bound also changes with x.",
    "setup": "F′(x)=cos(x²)·2x.",
    "solution": "F′(0)=cos(0)·0=0. The chain factor cannot be omitted.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Fundamental Theorem",
    "objective": "Evaluate definite integrals",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-119",
    "hub": "integration",
    "subject": "Calculus I",
    "topic": "Integrals, substitution and the FTC",
    "subtopic": "Substitution with bounds",
    "title": "Substitution with bounds",
    "prompt": "Evaluate ∫ from 0 to 1 of 2x exp(x²) dx.",
    "answer": [
      "1.718281828459045"
    ],
    "kind": "number",
    "value": 1.718281828459045,
    "units": "",
    "hint": "Let the exponent be the new variable.",
    "setup": "u=x², du=2x dx; bounds become 0 and 1.",
    "solution": "The integral is ∫₀¹ eᵘdu=e−1≈1.71828.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Fundamental Theorem",
    "objective": "Evaluate definite integrals",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-120",
    "hub": "integration",
    "subject": "Calculus I",
    "topic": "Integrals, substitution and the FTC",
    "subtopic": "Recover position",
    "title": "Recover position",
    "prompt": "A particle has velocity v(t)=2t m/s and position x(0)=3 m. Find x(2 s).",
    "answer": [
      "7"
    ],
    "kind": "number",
    "value": 7,
    "units": "m",
    "hint": "Integrate velocity, then include initial position.",
    "setup": "x(2)=x(0)+∫₀²2t dt.",
    "solution": "The displacement is [t²]₀²=4 m. Therefore x(2)=3+4=7 m.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Fundamental Theorem",
    "objective": "Evaluate definite integrals",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-121",
    "hub": "integration",
    "subject": "Calculus I",
    "topic": "Integrals, substitution and the FTC",
    "subtopic": "An indefinite-integral family",
    "title": "An indefinite-integral family",
    "prompt": "Explain why ∫2x dx is x²+C rather than only x².",
    "answer": [
      "Every constant differentiates to zero, so all functions x²+C have derivative 2x. An initial condition can select C."
    ],
    "kind": "rubric",
    "units": "",
    "hint": "Differentiation loses additive constants.",
    "setup": "Differentiate both x² and x²+5.",
    "solution": "Both have derivative 2x. An indefinite integral includes the entire family x²+C.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Fundamental Theorem",
    "objective": "Evaluate definite integrals",
    "rubric": [
      "Recognize derivative of a constant is zero",
      "State the family of antiderivatives",
      "Distinguish an initial condition from a definite-integral bound"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-122",
    "hub": "integration",
    "subject": "Calculus I",
    "topic": "Integrals, substitution and the FTC",
    "subtopic": "A Riemann sum",
    "title": "A Riemann sum",
    "prompt": "Approximate ∫₀²x dx using two equal right-endpoint rectangles.",
    "answer": [
      "3"
    ],
    "kind": "number",
    "value": 3,
    "units": "",
    "hint": "Each interval has width 1.",
    "setup": "Right endpoints are x=1 and x=2.",
    "solution": "The sum is 1·1+2·1=3. It overestimates the exact area 2 for this increasing function.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Fundamental Theorem",
    "objective": "Evaluate definite integrals",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-123",
    "hub": "integral-apps",
    "subject": "Calculus I",
    "topic": "Area, volume and net change",
    "subtopic": "Area between two curves",
    "title": "Area between two curves",
    "prompt": "Find the area between y=x and y=x² over 0≤x≤1.",
    "answer": [
      "0.16666666666666666"
    ],
    "kind": "number",
    "value": 0.16666666666666666,
    "units": "",
    "hint": "Identify the upper curve on this interval.",
    "setup": "A=∫₀¹(x−x²)dx.",
    "solution": "A=[x²/2−x³/3]₀¹=1/2−1/3=1/6 square units.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Areas between curves",
    "objective": "Set up an area integral",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-124",
    "hub": "integral-apps",
    "subject": "Calculus I",
    "topic": "Area, volume and net change",
    "subtopic": "A disk volume",
    "title": "A disk volume",
    "prompt": "Rotate the region 0≤y≤x, 0≤x≤1 about the x-axis. Find the volume.",
    "answer": [
      "1.0471975511965976"
    ],
    "kind": "number",
    "value": 1.0471975511965976,
    "units": "",
    "hint": "A slice perpendicular to x is a disk of radius x.",
    "setup": "V=π∫₀¹x² dx.",
    "solution": "V=π/3 cubic units. The result also equals a cone volume with radius and height 1.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Areas between curves",
    "objective": "Set up an area integral",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-125",
    "hub": "integral-apps",
    "subject": "Calculus I",
    "topic": "Area, volume and net change",
    "subtopic": "Average value",
    "title": "Average value",
    "prompt": "Find the average value of f(x)=x² on [0,3].",
    "answer": [
      "3"
    ],
    "kind": "number",
    "value": 3,
    "units": "",
    "hint": "Divide total accumulation by interval length.",
    "setup": "favg=(1/3)∫₀³x²dx.",
    "solution": "The integral is 9; the average is 9/3=3.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Areas between curves",
    "objective": "Set up an area integral",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-126",
    "hub": "integral-apps",
    "subject": "Calculus I",
    "topic": "Area, volume and net change",
    "subtopic": "Distance versus displacement",
    "title": "Distance versus displacement",
    "prompt": "A particle has v(t)=t−1 m/s for 0≤t≤2 s. Find total distance.",
    "answer": [
      "1"
    ],
    "kind": "number",
    "value": 1,
    "units": "m",
    "hint": "Split at the velocity sign change.",
    "setup": "Distance=−∫₀¹(t−1)dt+∫₁²(t−1)dt.",
    "solution": "Each half contributes 0.5 m, so distance is 1 m. Net displacement is zero.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Calculus • Areas between curves",
    "objective": "Set up an area integral",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-127",
    "hub": "measurement",
    "subject": "Physics I",
    "topic": "Units, precision and estimation",
    "subtopic": "Convert a speed",
    "title": "Convert a speed",
    "prompt": "Convert 72 km/h to m/s.",
    "answer": [
      "20"
    ],
    "kind": "number",
    "value": 20,
    "units": "m/s",
    "hint": "Use 1000 m/km and 3600 s/h.",
    "setup": "72·1000/3600.",
    "solution": "The speed is 20 m/s.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Units and measurement",
    "objective": "Convert compatible units",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-128",
    "hub": "measurement",
    "subject": "Physics I",
    "topic": "Units, precision and estimation",
    "subtopic": "Significant figures",
    "title": "Significant figures",
    "prompt": "How many significant figures are in the written measurement 0.00450 m?",
    "answer": [
      "3"
    ],
    "kind": "number",
    "value": 3,
    "units": "",
    "hint": "Leading zeros locate the decimal; a trailing decimal zero reports precision.",
    "setup": "Identify the digits that carry reported measurement precision.",
    "solution": "The digits 4, 5 and the final 0 are significant: three.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Units and measurement",
    "objective": "Convert compatible units",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-129",
    "hub": "measurement",
    "subject": "Physics I",
    "topic": "Units, precision and estimation",
    "subtopic": "Dimensions of acceleration",
    "title": "Dimensions of acceleration",
    "prompt": "Which is the acceleration unit: m/s, m/s², or kg·m/s?",
    "answer": [
      "m/s²",
      "m/s^2",
      "m/s2"
    ],
    "kind": "text",
    "units": "",
    "hint": "Acceleration is velocity change divided by time.",
    "setup": "Divide m/s by s.",
    "solution": "Acceleration has units m/s².",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Units and measurement",
    "objective": "Convert compatible units",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-130",
    "hub": "measurement",
    "subject": "Physics I",
    "topic": "Units, precision and estimation",
    "subtopic": "Rounding after addition",
    "title": "Rounding after addition",
    "prompt": "Report 12.3+0.45 to the appropriate number of decimal places.",
    "answer": [
      "12.8"
    ],
    "kind": "number",
    "value": 12.8,
    "units": "",
    "hint": "Addition is limited by decimal-place precision.",
    "setup": "Compute 12.75, then round to the tenths place.",
    "solution": "The reported result is 12.8. The first measurement is only precise to tenths.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Units and measurement",
    "objective": "Convert compatible units",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0,
    "absTol": 1e-9
  },
  {
    "id": "v2-131",
    "hub": "angular-momentum",
    "subject": "Physics I",
    "topic": "Angular momentum",
    "subtopic": "Pulling inward",
    "title": "Pulling inward",
    "prompt": "A rotating system changes I from 4 to 2 kg·m² with negligible external torque. Initial ω=3 rad/s. Find final ω.",
    "answer": [
      "6"
    ],
    "kind": "number",
    "value": 6,
    "units": "rad/s",
    "hint": "Conserve Iω rather than ω.",
    "setup": "Iiωi=Ifωf.",
    "solution": "ωf=4·3/2=6 rad/s.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Angular momentum",
    "objective": "Apply angular momentum conservation",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-132",
    "hub": "angular-momentum",
    "subject": "Physics I",
    "topic": "Angular momentum",
    "subtopic": "Energy during contraction",
    "title": "Energy during contraction",
    "prompt": "In the preceding type of isolated-torque system, I halves while angular momentum stays constant. By what factor does rotational kinetic energy change?",
    "answer": [
      "2"
    ],
    "kind": "number",
    "value": 2,
    "units": "",
    "hint": "Express energy in terms of L and I.",
    "setup": "K=L²/(2I).",
    "solution": "Halving I doubles K. Internal work can increase energy while angular momentum remains constant.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Angular momentum",
    "objective": "Apply angular momentum conservation",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-133",
    "hub": "angular-momentum",
    "subject": "Physics I",
    "topic": "Angular momentum",
    "subtopic": "A tangential particle",
    "title": "A tangential particle",
    "prompt": "A 2 kg particle moves tangentially at 3 m/s, 4 m from the origin. Find angular momentum magnitude.",
    "answer": [
      "24"
    ],
    "kind": "number",
    "value": 24,
    "units": "kg*m^2/s",
    "hint": "Tangential velocity is perpendicular to position.",
    "setup": "L=rmv sin90°.",
    "solution": "L=4·2·3=24 kg·m²/s.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Angular momentum",
    "objective": "Apply angular momentum conservation",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-134",
    "hub": "angular-momentum",
    "subject": "Physics I",
    "topic": "Angular momentum",
    "subtopic": "Radial motion",
    "title": "Radial motion",
    "prompt": "A particle moves directly toward the chosen origin. What is its angular momentum magnitude about that origin?",
    "answer": [
      "0"
    ],
    "kind": "number",
    "value": 0,
    "units": "kg*m^2/s",
    "hint": "Position and momentum are collinear.",
    "setup": "L=|r×p|=rp sinθ.",
    "solution": "θ=180°, so L=0 despite nonzero linear momentum.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Angular momentum",
    "objective": "Apply angular momentum conservation",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-135",
    "hub": "gravitation",
    "subject": "Physics I",
    "topic": "Gravity and circular orbits",
    "subtopic": "Double the separation",
    "title": "Double the separation",
    "prompt": "Two point masses attract with force F. If separation doubles, what is the new force divided by F?",
    "answer": [
      "0.25"
    ],
    "kind": "number",
    "value": 0.25,
    "units": "",
    "hint": "Use inverse-square scaling.",
    "setup": "Fnew/Fold=(r/(2r))².",
    "solution": "The ratio is 1/4.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Gravitation",
    "objective": "Use center-to-center distance",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-136",
    "hub": "gravitation",
    "subject": "Physics I",
    "topic": "Gravity and circular orbits",
    "subtopic": "Surface versus altitude",
    "title": "Surface versus altitude",
    "prompt": "At altitude equal to a spherical planet’s radius R, what is g divided by surface g?",
    "answer": [
      "0.25"
    ],
    "kind": "number",
    "value": 0.25,
    "units": "",
    "hint": "The center-to-object distance is R+h.",
    "setup": "With h=R, orbital distance is 2R.",
    "solution": "g/g_surface=(R/(2R))²=1/4.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Gravitation",
    "objective": "Use center-to-center distance",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-137",
    "hub": "gravitation",
    "subject": "Physics I",
    "topic": "Gravity and circular orbits",
    "subtopic": "A circular orbit",
    "title": "A circular orbit",
    "prompt": "A central body has GM=4×10¹⁴ m³/s². Find circular orbital speed at r=1×10⁷ m.",
    "answer": [
      "6324.555320336759"
    ],
    "kind": "number",
    "value": 6324.555320336759,
    "units": "m/s",
    "hint": "Gravity supplies centripetal acceleration.",
    "setup": "v=√(GM/r).",
    "solution": "v=√(4×10⁷)≈6324.56 m/s. The radius is measured from the center.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Gravitation",
    "objective": "Use center-to-center distance",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-138",
    "hub": "gravitation",
    "subject": "Physics I",
    "topic": "Gravity and circular orbits",
    "subtopic": "Weightless does not mean no gravity",
    "title": "Weightless does not mean no gravity",
    "prompt": "Explain why an orbiting astronaut can feel weightless while gravity acts.",
    "answer": [
      "The astronaut and spacecraft are in free fall together, so there is little support/contact force. Gravity still provides orbital acceleration."
    ],
    "kind": "rubric",
    "units": "",
    "hint": "Distinguish gravitational force from apparent weight.",
    "setup": "Compare the motion of the astronaut and the surrounding spacecraft.",
    "solution": "Both accelerate under gravity together. Apparent weight is associated with support force, which can be nearly zero in free fall.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Gravitation",
    "objective": "Use center-to-center distance",
    "rubric": [
      "State that gravity remains present",
      "Explain shared free fall",
      "Distinguish support force from gravitational force"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-139",
    "hub": "oscillations",
    "subject": "Physics I",
    "topic": "Simple harmonic motion",
    "subtopic": "A spring period",
    "title": "A spring period",
    "prompt": "A mass 1 kg on an ideal spring k=4 N/m oscillates freely. Find its period.",
    "answer": [
      "3.141592653589793"
    ],
    "kind": "number",
    "value": 3.141592653589793,
    "units": "s",
    "hint": "The frequency scale is √(k/m).",
    "setup": "T=2π√(m/k).",
    "solution": "T=2π√(1/4)=π≈3.142 s.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Simple harmonic motion",
    "objective": "Connect phase and motion",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-140",
    "hub": "oscillations",
    "subject": "Physics I",
    "topic": "Simple harmonic motion",
    "subtopic": "Acceleration at displacement",
    "title": "Acceleration at displacement",
    "prompt": "An ideal oscillator has ω=3 rad/s and x=0.2 m. Find signed acceleration.",
    "answer": [
      "-1.8"
    ],
    "kind": "number",
    "value": -1.8,
    "units": "m/s^2",
    "hint": "Acceleration opposes displacement.",
    "setup": "a=−ω²x.",
    "solution": "a=−9·0.2=−1.8 m/s².",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Simple harmonic motion",
    "objective": "Connect phase and motion",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-141",
    "hub": "oscillations",
    "subject": "Physics I",
    "topic": "Simple harmonic motion",
    "subtopic": "Maximum speed",
    "title": "Maximum speed",
    "prompt": "An ideal oscillator has amplitude 0.1 m and angular frequency 5 rad/s. Find maximum speed.",
    "answer": [
      "0.5"
    ],
    "kind": "number",
    "value": 0.5,
    "units": "m/s",
    "hint": "Differentiate the sinusoidal position.",
    "setup": "vmax=Aω.",
    "solution": "vmax=0.1·5=0.5 m/s, attained at equilibrium.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Simple harmonic motion",
    "objective": "Connect phase and motion",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-142",
    "hub": "oscillations",
    "subject": "Physics I",
    "topic": "Simple harmonic motion",
    "subtopic": "At a turning point",
    "title": "At a turning point",
    "prompt": "At a nonzero-amplitude turning point of ideal SHM, is speed zero or maximum?",
    "answer": [
      "zero",
      "0"
    ],
    "kind": "text",
    "units": "",
    "hint": "The particle is reversing direction.",
    "setup": "Consider the derivative of position at its extremum.",
    "solution": "Speed is zero. The acceleration magnitude is maximum, directed toward equilibrium.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Simple harmonic motion",
    "objective": "Connect phase and motion",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-143",
    "hub": "waves",
    "subject": "Physics I",
    "topic": "Traveling and standing waves",
    "subtopic": "Wave speed",
    "title": "Wave speed",
    "prompt": "A wave has frequency 5 Hz and wavelength 2 m. Find its speed.",
    "answer": [
      "10"
    ],
    "kind": "number",
    "value": 10,
    "units": "m/s",
    "hint": "One wavelength advances in one period.",
    "setup": "v=fλ.",
    "solution": "v=5·2=10 m/s.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Waves",
    "objective": "Relate speed, frequency and wavelength",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-144",
    "hub": "waves",
    "subject": "Physics I",
    "topic": "Traveling and standing waves",
    "subtopic": "A string fundamental",
    "title": "A string fundamental",
    "prompt": "A string fixed at both ends has length 2 m and wave speed 40 m/s. Find its fundamental frequency.",
    "answer": [
      "10"
    ],
    "kind": "number",
    "value": 10,
    "units": "Hz",
    "hint": "The fundamental fits half a wavelength in the string.",
    "setup": "f₁=v/(2L).",
    "solution": "f₁=40/4=10 Hz.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Waves",
    "objective": "Relate speed, frequency and wavelength",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-145",
    "hub": "waves",
    "subject": "Physics I",
    "topic": "Traveling and standing waves",
    "subtopic": "Second harmonic",
    "title": "Second harmonic",
    "prompt": "For a fixed-fixed string with fundamental 12 Hz, find the second-harmonic frequency.",
    "answer": [
      "24"
    ],
    "kind": "number",
    "value": 24,
    "units": "Hz",
    "hint": "Harmonics are integer multiples of the fundamental in this model.",
    "setup": "f₂=2f₁.",
    "solution": "f₂=24 Hz.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Waves",
    "objective": "Relate speed, frequency and wavelength",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-146",
    "hub": "waves",
    "subject": "Physics I",
    "topic": "Traveling and standing waves",
    "subtopic": "Travel direction",
    "title": "Travel direction",
    "prompt": "For k>0 and ω>0, does y=A sin(kx−ωt) travel in +x or −x?",
    "answer": [
      "+x",
      "positive x",
      "positive"
    ],
    "kind": "text",
    "units": "",
    "hint": "Track a point of constant phase.",
    "setup": "kx−ωt=constant implies x=(ω/k)t+constant.",
    "solution": "The wave travels in +x. This is not the direction of the transverse particle displacement.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Waves",
    "objective": "Relate speed, frequency and wavelength",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-147",
    "hub": "fluids",
    "subject": "Physics I",
    "topic": "Fluid pressure and ideal flow",
    "subtopic": "Hydrostatic pressure change",
    "title": "Hydrostatic pressure change",
    "prompt": "Water has density 1000 kg/m³. With g=10 m/s², find the pressure increase 2 m below its surface.",
    "answer": [
      "20000"
    ],
    "kind": "number",
    "value": 20000,
    "units": "Pa",
    "hint": "Use the depth difference, not an arbitrary absolute height.",
    "setup": "ΔP=ρgΔh.",
    "solution": "ΔP=1000·10·2=20000 Pa. Add surface pressure for absolute pressure.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Bernoulli’s equation",
    "objective": "Calculate hydrostatic changes",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-148",
    "hub": "fluids",
    "subject": "Physics I",
    "topic": "Fluid pressure and ideal flow",
    "subtopic": "Buoyant force",
    "title": "Buoyant force",
    "prompt": "An object displaces 0.002 m³ of water of density 1000 kg/m³. Use g=10 m/s². Find buoyant-force magnitude.",
    "answer": [
      "20"
    ],
    "kind": "number",
    "value": 20,
    "units": "N",
    "hint": "Buoyancy equals displaced-fluid weight.",
    "setup": "FB=ρfluid gVdisplaced.",
    "solution": "FB=1000·10·0.002=20 N upward.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Bernoulli’s equation",
    "objective": "Calculate hydrostatic changes",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-149",
    "hub": "fluids",
    "subject": "Physics I",
    "topic": "Fluid pressure and ideal flow",
    "subtopic": "A narrowing ideal stream",
    "title": "A narrowing ideal stream",
    "prompt": "In steady incompressible flow, area halves from point 1 to point 2. Speed at point 1 is 3 m/s. Find speed at point 2.",
    "answer": [
      "6"
    ],
    "kind": "number",
    "value": 6,
    "units": "m/s",
    "hint": "Conserve volume flow.",
    "setup": "A₁v₁=A₂v₂; A₂=A₁/2.",
    "solution": "v₂=2v₁=6 m/s.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Bernoulli’s equation",
    "objective": "Calculate hydrostatic changes",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-150",
    "hub": "fluids",
    "subject": "Physics I",
    "topic": "Fluid pressure and ideal flow",
    "subtopic": "Bernoulli pressure change",
    "title": "Bernoulli pressure change",
    "prompt": "A horizontal ideal flow of density 1000 kg/m³ speeds from 2 to 4 m/s. Find P₂−P₁.",
    "answer": [
      "-6000"
    ],
    "kind": "number",
    "value": -6000,
    "units": "Pa",
    "hint": "No elevation change appears.",
    "setup": "P₂−P₁=½ρ(v₁²−v₂²).",
    "solution": "The difference is 500(4−16)=−6000 Pa. Pressure decreases as kinetic energy per volume rises in this model.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax University Physics • Bernoulli’s equation",
    "objective": "Calculate hydrostatic changes",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-151",
    "hub": "substitution",
    "subject": "Organic Chemistry I",
    "topic": "SN1, SN2, E1 and E2",
    "subtopic": "SN2 rate test",
    "title": "SN2 rate test",
    "prompt": "Under an SN2 rate law, doubling both substrate and nucleophile concentrations changes rate by what factor?",
    "answer": [
      "4"
    ],
    "kind": "number",
    "value": 4,
    "units": "",
    "hint": "Both concentrations enter linearly.",
    "setup": "Rate ratio=(2[RX])(2[Nu])/([RX][Nu]).",
    "solution": "The rate increases by a factor of four, with temperature and k held fixed.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • Substitution and elimination",
    "objective": "Distinguish concerted and stepwise paths",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-152",
    "hub": "substitution",
    "subject": "Organic Chemistry I",
    "topic": "SN1, SN2, E1 and E2",
    "subtopic": "Backside displacement",
    "title": "Backside displacement",
    "prompt": "Does an ideal SN2 displacement at a stereogenic reacting carbon produce inversion or retention of local geometry?",
    "answer": [
      "inversion"
    ],
    "kind": "text",
    "units": "",
    "hint": "Consider the required approach direction.",
    "setup": "Backside attack occurs opposite the leaving group.",
    "solution": "It produces inversion of local tetrahedral geometry. A changed R/S label is not guaranteed because priority ordering may change.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • Substitution and elimination",
    "objective": "Distinguish concerted and stepwise paths",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-153",
    "hub": "substitution",
    "subject": "Organic Chemistry I",
    "topic": "SN1, SN2, E1 and E2",
    "subtopic": "A tertiary obstacle",
    "title": "A tertiary obstacle",
    "prompt": "Is ordinary SN2 displacement at a tertiary saturated carbon generally favored?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Consider steric access to the backside.",
    "setup": "Three carbon substituents obstruct the approach.",
    "solution": "No. Tertiary steric hindrance blocks ordinary SN2; other mechanisms depend on the conditions.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • Substitution and elimination",
    "objective": "Distinguish concerted and stepwise paths",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-154",
    "hub": "substitution",
    "subject": "Organic Chemistry I",
    "topic": "SN1, SN2, E1 and E2",
    "subtopic": "E2 geometry",
    "title": "E2 geometry",
    "prompt": "What relative geometry of the departing β-H and leaving group usually favors E2: anti-periplanar or synclinal?",
    "answer": [
      "anti-periplanar",
      "antiperiplanar"
    ],
    "kind": "text",
    "units": "",
    "hint": "The breaking bonds need appropriate orbital alignment.",
    "setup": "Picture the two bonds in the same plane on opposite sides.",
    "solution": "Anti-periplanar alignment usually favors E2. Cyclohexane often requires a trans-diaxial arrangement.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • Substitution and elimination",
    "objective": "Distinguish concerted and stepwise paths",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-155",
    "hub": "alkynes",
    "subject": "Organic Chemistry I",
    "topic": "Alkynes and reaction selection",
    "subtopic": "Lindlar reduction",
    "title": "Lindlar reduction",
    "prompt": "But-2-yne is treated with H₂ and Lindlar catalyst. Is the main alkene cis-but-2-ene or trans-but-2-ene?",
    "answer": [
      "cis-but-2-ene",
      "cis-2-butene",
      "cis"
    ],
    "kind": "text",
    "units": "",
    "hint": "Controlled catalytic addition is syn.",
    "setup": "Place the newly added hydrogens on the same face.",
    "solution": "The product is cis-but-2-ene under the stated partial-reduction conditions.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • Alkyne reactions",
    "objective": "Choose a partial reduction",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-156",
    "hub": "alkynes",
    "subject": "Organic Chemistry I",
    "topic": "Alkynes and reaction selection",
    "subtopic": "Dissolving-metal reduction",
    "title": "Dissolving-metal reduction",
    "prompt": "But-2-yne undergoes dissolving-metal reduction with Na in liquid NH₃. Is the main alkene cis or trans?",
    "answer": [
      "trans",
      "trans-but-2-ene",
      "trans-2-butene"
    ],
    "kind": "text",
    "units": "",
    "hint": "Contrast this reagent set with Lindlar reduction.",
    "setup": "This reduction gives net anti addition.",
    "solution": "The main product is trans-but-2-ene.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • Alkyne reactions",
    "objective": "Choose a partial reduction",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-157",
    "hub": "alkynes",
    "subject": "Organic Chemistry I",
    "topic": "Alkynes and reaction selection",
    "subtopic": "Terminal hydrogen",
    "title": "Terminal hydrogen",
    "prompt": "Does CH₃–C≡C–CH₃ have a terminal alkyne hydrogen?",
    "answer": [
      "no"
    ],
    "kind": "text",
    "units": "",
    "hint": "Inspect both sp carbons.",
    "setup": "Each triple-bond carbon is attached to a methyl group.",
    "solution": "No. This is an internal alkyne, with no hydrogen directly attached to either sp carbon.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • Alkyne reactions",
    "objective": "Choose a partial reduction",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-158",
    "hub": "alkynes",
    "subject": "Organic Chemistry I",
    "topic": "Alkynes and reaction selection",
    "subtopic": "Complete hydrogenation count",
    "title": "Complete hydrogenation count",
    "prompt": "How many moles of H₂ are required to completely hydrogenate 1 mol of one isolated C≡C bond to a C–C bond?",
    "answer": [
      "2"
    ],
    "kind": "number",
    "value": 2,
    "units": "mol",
    "hint": "Each π bond can consume one equivalent of H₂.",
    "setup": "A triple bond contains two π bonds.",
    "solution": "Two moles of H₂ are needed per mole of isolated triple bonds.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • Alkyne reactions",
    "objective": "Choose a partial reduction",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-159",
    "hub": "spectra",
    "subject": "Organic Chemistry I",
    "topic": "IR and introductory NMR",
    "subtopic": "Supplied IR evidence",
    "title": "Supplied IR evidence",
    "prompt": "A molecule has a strong band near 1715 cm⁻¹. Given that this range is characteristic of C=O stretching, what structural group is supported?",
    "answer": [
      "carbonyl",
      "c=o",
      "carbonyl group"
    ],
    "kind": "text",
    "units": "",
    "hint": "Use the supplied assignment without over-identifying the molecule.",
    "setup": "A C=O bond is the common feature of several functional-group families.",
    "solution": "A carbonyl group is supported. This peak alone cannot uniquely distinguish all carbonyl families.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • IR and NMR",
    "objective": "Interpret supplied IR bands",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-160",
    "hub": "spectra",
    "subject": "Organic Chemistry I",
    "topic": "IR and introductory NMR",
    "subtopic": "Equivalent methyl protons",
    "title": "Equivalent methyl protons",
    "prompt": "Ignoring isotopes and using rapid rotation, how many proton NMR environments occur in CH₃–O–CH₃?",
    "answer": [
      "1"
    ],
    "kind": "number",
    "value": 1,
    "units": "",
    "hint": "The two methyl groups are symmetry-equivalent.",
    "setup": "Compare environments rather than counting individual hydrogens.",
    "solution": "There is one proton environment, containing all six hydrogens.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • IR and NMR",
    "objective": "Interpret supplied IR bands",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-161",
    "hub": "spectra",
    "subject": "Organic Chemistry I",
    "topic": "IR and introductory NMR",
    "subtopic": "Simple splitting",
    "title": "Simple splitting",
    "prompt": "In a first-order approximation, a proton group couples to three equivalent neighboring protons. How many lines are expected?",
    "answer": [
      "4"
    ],
    "kind": "number",
    "value": 4,
    "units": "",
    "hint": "Use the stated n+1 model.",
    "setup": "n=3.",
    "solution": "3+1=4 lines: a quartet.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Calculation",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • IR and NMR",
    "objective": "Interpret supplied IR bands",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
  {
    "id": "v2-162",
    "hub": "spectra",
    "subject": "Organic Chemistry I",
    "topic": "IR and introductory NMR",
    "subtopic": "Integration ratio",
    "title": "Integration ratio",
    "prompt": "Two proton NMR signals integrate 6:4. Normalize to the smallest integer ratio, entering a:b.",
    "answer": [
      "3:2",
      "3/2"
    ],
    "kind": "text",
    "units": "",
    "hint": "Divide both areas by their common factor.",
    "setup": "The common factor is two.",
    "solution": "The normalized ratio is 3:2. Integration gives relative counts, not a unique molecular formula.",
    "clarify": "Identify the requested quantity or concept. Use only the conditions given; do not add an unstated assumption.",
    "calculate": "Use the setup one operation at a time. Keep units consistent and check the sign or classification before submitting.",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 4,
    "source": "Original practice • OpenStax Organic Chemistry • IR and NMR",
    "objective": "Interpret supplied IR bands",
    "rubric": [
      "Identify the relevant concept",
      "Apply it to this situation",
      "Explain the limitation or check"
    ],
    "relTol": 0.005,
    "absTol": 1e-8
  },
{
  "id": "v3-1",
  "subject": "Physics I",
  "topic": "Kinematics",
  "title": "A launch from a ledge",
  "prompt": "A projectile leaves a 15 m ledge with velocity (12 i + 10 j) m/s. Set y=0 at the ground, neglect drag and use g=10 m/s². Derive the flight time and enter the horizontal range.",
  "answer": [
    "36"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Solve the vertical motion before the horizontal motion.",
  "setup": "Use 0=h+v₀ᵧt−gt²/2; retain the positive root.",
  "solution": "1. Diagram: draw x right and y up; launch at y=h. Free-body diagram in flight has only mg downward.\n2. Integrate constant acceleration: x=v₀ₓt and y=h+v₀ᵧt−gt²/2. At impact y=0.\n3. Solve gt²−2v₀ᵧt−2h=0: t=[v₀ᵧ+√(v₀ᵧ²+2gh)]/g; discard the negative root.\n4. Substitute t=[10+√(100+300)]/10=3 s. Then x=12(3)=36 m.\n5. Unit check: the radical has units m/s, t has s, and (m/s)s gives m.",
  "diagram": "",
  "hub": "kinematics",
  "subtopic": "A launch from a ledge",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "m",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "A launch from a ledge",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 36,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-2",
  "subject": "Physics I",
  "topic": "Vectors and components",
  "title": "Two-dimensional acceleration",
  "prompt": "A particle has v₀=(3 i−2 j) m/s and constant a=(2 i+4 j) m/s². Find the magnitude of its displacement over 2 s.",
  "answer": [
    "10.770329614269007"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Integrate each component separately.",
  "setup": "Use Δx=v₀ₓt+aₓt²/2 and the corresponding y expression.",
  "solution": "1. Diagram: draw independent x and y component axes. The net force points along a; individual forces are unspecified.\n2. Integrating velocity gives Δr=v₀t+(1/2)at².\n3. Δx=3(2)+(1/2)2(2²)=10 m; Δy=−2(2)+(1/2)4(2²)=4 m.\n4. |Δr|=√(Δx²+Δy²)=√116≈10.7703 m. This is displacement magnitude, not path length.\n5. Each component has units (m/s)s+(m/s²)s²=m.",
  "diagram": "",
  "hub": "vectors",
  "subtopic": "Two-dimensional acceleration",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "m",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Two-dimensional acceleration",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 10.770329614269007,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-3",
  "subject": "Physics I",
  "topic": "Forces",
  "title": "Atwood tension from two equations",
  "prompt": "Masses m₁=3 kg and m₂=5 kg hang on a massless rope over an ideal pulley. Released from rest, find rope tension. Use g=10 m/s².",
  "answer": [
    "37.5"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Add the equations to eliminate tension first.",
  "setup": "Use T−m₁g=m₁a and m₂g−T=m₂a.",
  "solution": "1. FBD: each mass has T upward and mg downward. Choose m₁ upward and m₂ downward as positive.\n2. Newton: T−m₁g=m₁a and m₂g−T=m₂a.\n3. Add: a=(m₂−m₁)g/(m₁+m₂). Substitute in T=m₁(g+a) to obtain T=2m₁m₂g/(m₁+m₂).\n4. a=20/8=2.5 m/s²; T=2(3)(5)(10)/8=37.5 N.\n5. T lies between 30 N and 50 N. Units kg·m/s²=N.",
  "diagram": "",
  "hub": "forces",
  "subtopic": "Atwood tension from two equations",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "N",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Atwood tension from two equations",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 37.5,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-4",
  "subject": "Physics I",
  "topic": "Forces",
  "title": "Incline and hanging mass with friction",
  "prompt": "A 4 kg block is sliding UP a 30° incline, connected by an ideal rope and pulley to a descending 4 kg mass. The incline has μk=0.20. Find acceleration positive down for the hanging mass. Use g=10 m/s².",
  "answer": [
    "1.6339745962155612"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Use the stated sliding direction to choose friction direction.",
  "setup": "Eliminate T by adding the two along-rope equations.",
  "solution": "1. FBD incline: mg down vertically, N perpendicular outward, T upslope, kinetic friction downslope. Hanging mass: Mg down and T up.\n2. Normal balance gives N=mg cosθ, so fk=μk mg cosθ.\n3. Along the rope: T−mg sinθ−μk mg cosθ=ma; Mg−T=Ma.\n4. Add and solve: a=[Mg−mg sinθ−μk mg cosθ]/(M+m).\n5. a=[40−20−0.20(4)(10)cos30°]/8≈1.63397 m/s².\n6. Numerator is force, denominator mass. Positive a is consistent with the stated sliding direction; static friction was not assumed.",
  "diagram": "",
  "hub": "forces",
  "subtopic": "Incline and hanging mass with friction",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "m/s^2",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Incline and hanging mass with friction",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 1.6339745962155612,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-5",
  "subject": "Physics I",
  "topic": "Energy",
  "title": "Spring launch through a rough patch",
  "prompt": "A 0.50 kg block leaves a horizontal spring (k=200 N/m, compression 0.20 m), then traverses a separate 1.0 m rough horizontal patch with μk=0.20. All other motion is frictionless. Find speed leaving the patch; g=10 m/s².",
  "answer": [
    "3.4641016151377544"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Subtract frictional work from spring energy.",
  "setup": "Write Kfinal=Uspring−μk mgd.",
  "solution": "1. FBD: while touching the spring, spring force acts forward; on the rough patch, friction acts backward. N and mg balance vertically.\n2. Energy balance: (1/2)kx²−μk mgd=(1/2)mv².\n3. Solve symbolically: v=√(kx²/m−2μk gd), provided the radicand is nonnegative.\n4. Initial energy=4 J; friction removes 1 J; remaining kinetic energy=3 J.\n5. v=√[2(3)/0.50]=√12≈3.46410 m/s. Both terms inside the radical have units m²/s².",
  "diagram": "",
  "hub": "energy",
  "subtopic": "Spring launch through a rough patch",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "m/s",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Spring launch through a rough patch",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 3.4641016151377544,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-6",
  "subject": "Physics I",
  "topic": "Energy",
  "title": "Spring launch up a frictionless slope",
  "prompt": "A 1 kg block is released from a horizontal spring compressed 0.30 m (k=400 N/m), leaves the spring, and climbs a frictionless 30° ramp. Find distance traveled up the ramp before stopping. Use g=10 m/s².",
  "answer": [
    "3.6"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Convert the vertical energy rise into ramp distance.",
  "setup": "Use h=s sinθ in kx²/2=mgh.",
  "solution": "1. FBD on ramp: weight down and normal perpendicular to ramp; no friction. Normal does no work.\n2. At the highest point K=0. Conservation gives kx²/2=mgh.\n3. Geometry h=s sinθ; hence s=kx²/(2mg sinθ).\n4. s=400(0.30²)/[2(1)(10)(0.5)]=3.6 m.\n5. J divided by N gives m. The corresponding vertical rise is 1.8 m.",
  "diagram": "",
  "hub": "energy",
  "subtopic": "Spring launch up a frictionless slope",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "m",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Spring launch up a frictionless slope",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 3.6,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-7",
  "subject": "Physics I",
  "topic": "Momentum",
  "title": "Collision followed by a spring stop",
  "prompt": "A 0.020 kg projectile at 300 m/s embeds in a stationary 0.980 kg block on a frictionless table. The combined body then compresses a 400 N/m spring. Find maximum compression.",
  "answer": [
    "0.3"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Separate the inelastic collision from the later spring motion.",
  "setup": "First mu=(M+m)V, then (M+m)V²=kx².",
  "solution": "1. Diagram: projectile moving right into block; after impact the spring pushes left. During the short collision external horizontal impulse is negligible.\n2. Collision momentum: mu=(M+m)V, so V=mu/(M+m). Kinetic energy is not conserved during embedding.\n3. After collision, spring stopping conserves mechanical energy: (M+m)V²/2=kx²/2.\n4. Combine: x=mu/√[k(M+m)]. V=0.020(300)/1=6 m/s.\n5. x=6√(1/400)=0.300 m. Check: spring energy 18 J equals postcollision kinetic energy; initial projectile energy was 900 J. Units reduce to m.",
  "diagram": "",
  "hub": "momentum",
  "subtopic": "Collision followed by a spring stop",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "m",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Collision followed by a spring stop",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 0.3,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-8",
  "subject": "Physics I",
  "topic": "Momentum",
  "title": "A two-dimensional sticking collision",
  "prompt": "A 2 kg puck travels east at 3 m/s and sticks to a 1 kg puck traveling north at 4 m/s on a frictionless plane. Find their combined speed.",
  "answer": [
    "2.4037008503093262"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Conserve east and north components separately.",
  "setup": "Compute Vx and Vy before combining their magnitudes.",
  "solution": "1. Diagram: x east, y north. Vertical normal and weight cancel; horizontal external impulse is negligible.\n2. Conserve momentum as a vector: (m₁+m₂)V=m₁v₁+m₂v₂.\n3. Vx=2(3)/3=2 m/s; Vy=1(4)/3=4/3 m/s.\n4. |V|=√[2²+(4/3)²]=√52/3≈2.40370 m/s.\n5. Initial kinetic energy is 17 J; final is 26/3 J, so energy decreases as expected for sticking. Momentum divided by mass has units m/s.",
  "diagram": "",
  "hub": "momentum",
  "subtopic": "A two-dimensional sticking collision",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "m/s",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "A two-dimensional sticking collision",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 2.4037008503093262,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-9",
  "subject": "Physics I",
  "topic": "Momentum",
  "title": "Impulse when a ball rebounds",
  "prompt": "A 0.15 kg ball hits a vertical wall moving right at 20 m/s and rebounds left at 12 m/s. Contact lasts 0.008 s. Find average horizontal force on the ball, taking right positive.",
  "answer": [
    "-600"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Assign signs before subtracting velocities.",
  "setup": "Use Fav=m(vf−vi)/Δt.",
  "solution": "1. FBD during contact: wall force left, gravity down. Only horizontal momentum is requested.\n2. Impulse-momentum gives Fav Δt=m(vf−vi); solve Fav=m(vf−vi)/Δt.\n3. vf=−12 m/s, so Δv=−12−20=−32 m/s.\n4. Fav=0.15(−32)/0.008=−600 N. Negative means left.\n5. Unit check: kg(m/s)/s=kg·m/s²=N. Rebound changes direction, not just speed.",
  "diagram": "",
  "hub": "momentum",
  "subtopic": "Impulse when a ball rebounds",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "N",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Impulse when a ball rebounds",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": -600,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-10",
  "subject": "Physics I",
  "topic": "Circular motion",
  "title": "Release height for a vertical loop",
  "prompt": "A small frictionless bead follows the inside of a vertical circular track of radius R=2.0 m. Released from rest at height h above the bottom, what minimum h maintains contact at the top? Use g=10 m/s².",
  "answer": [
    "5"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Use zero normal force at the minimum-contact threshold.",
  "setup": "Combine vtop²=gR with energy conservation.",
  "solution": "1. FBD at the top: both mg and N point toward the center, downward.\n2. Radial Newton equation: mg+N=mvtop²/R. At the threshold N=0, vtop²=gR.\n3. Energy from release to top: mgh=mg(2R)+mvtop²/2.\n4. Substitute the threshold speed: h=2R+R/2=5R/2=5.0 m.\n5. Radius and height have units m; mass cancels. This model is a sliding particle, not a rolling sphere.",
  "diagram": "",
  "hub": "circular",
  "subtopic": "Release height for a vertical loop",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "m",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Release height for a vertical loop",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 5,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-11",
  "subject": "Physics I",
  "topic": "Torque and rotational dynamics",
  "title": "A rod released from horizontal",
  "prompt": "A uniform 3 kg rod of length 2 m is hinged frictionlessly at one end and released from rest horizontally. Find initial angular acceleration magnitude. Use I=(1/3)mL² and g=10 m/s².",
  "answer": [
    "7.5"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Weight acts at the midpoint; take torques about the hinge.",
  "setup": "Use mgL/2=(mL²/3)α.",
  "solution": "1. FBD: hinge reaction at pivot and weight mg at the rod center L/2. The hinge force produces no torque about the hinge.\n2. Initially gravity is perpendicular to the rod, so |τ|=mgL/2.\n3. Using τ=Iα gives α=(mgL/2)/[(1/3)mL²]=3g/(2L).\n4. α=3(10)/(2·2)=7.5 rad/s², clockwise for a rod pointing right.\n5. Units (N·m)/(kg·m²)=s⁻²; rad is dimensionless. Mass cancels.",
  "diagram": "",
  "hub": "torque",
  "subtopic": "A rod released from horizontal",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "rad/s^2",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "A rod released from horizontal",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 7.5,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-12",
  "subject": "Physics I",
  "topic": "Simple harmonic motion",
  "title": "Infer spring stiffness from period",
  "prompt": "A 0.80 kg mass oscillates on an ideal horizontal spring. It completes 10 cycles in 8.0 s. Find k. Enter the numerical value in N/m.",
  "answer": [
    "49.34802200544679"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Convert total time to the time of one cycle.",
  "setup": "Solve T=2π√(m/k) for k.",
  "solution": "1. FBD: N and mg cancel; restoring spring force is −kx horizontally.\n2. Newton gives x″+(k/m)x=0, so ω²=k/m and T=2π√(m/k).\n3. Total time divided by cycles gives T=0.8 s. Square the period relation: T²=4π²m/k.\n4. k=4π²m/T²=4π²(0.80)/(0.80²)=5π²≈49.3480 N/m.\n5. Unit check: kg/s²=N/m. Amplitude does not enter the ideal Hookean period.",
  "diagram": "",
  "hub": "oscillations",
  "subtopic": "Infer spring stiffness from period",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "N/m",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Infer spring stiffness from oscillation period",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 49.34802200544679,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-13",
  "subject": "Calculus I",
  "topic": "Continuity",
  "title": "Match both sides of a piecewise function",
  "prompt": "For x<2 let f(x)=(x²−4)/(x−2); let f(2)=b; for x>2 let f(x)=ax+1. Find a and b for continuity, showing both one-sided limits.",
  "answer": [
    "a=3/2, b=4"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Continuity imposes two separate equalities.",
  "setup": "Set limₓ→₂⁻f=limₓ→₂⁺f=f(2).",
  "solution": "1. For x<2, factor x²−4=(x−2)(x+2). Since x≠2, f(x)=x+2.\n2. The left limit is 4. The right limit is 2a+1.\n3. Equality requires 2a+1=4, hence a=3/2.\n4. Continuity also requires f(2)=b=4. Matching limits without matching the point value is insufficient.",
  "diagram": "",
  "hub": "continuity",
  "subtopic": "Match both sides of a piecewise function",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Match both sides of a piecewise function",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-14",
  "subject": "Calculus I",
  "topic": "Derivatives",
  "title": "Implicit tangent slope with a product",
  "prompt": "The curve x²+xy+y²=7 passes through (1,2). Find dy/dx at that point.",
  "answer": [
    "-0.8"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Apply the product rule to xy.",
  "setup": "Differentiate each term with respect to x, treating y as y(x).",
  "solution": "1. Differentiate x² to 2x. Product rule gives d(xy)/dx=y+xy′; chain rule gives d(y²)/dx=2yy′.\n2. Thus 2x+y+xy′+2yy′=0. Collect y′ terms: (x+2y)y′=−(2x+y).\n3. y′=−(2x+y)/(x+2y), provided x+2y≠0.\n4. At (1,2), y′=−4/5=−0.8. Check point: 1+2+4=7.",
  "diagram": "",
  "hub": "derivatives",
  "subtopic": "Implicit tangent slope with a product",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Implicit tangent slope with a product",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": -0.8,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-15",
  "subject": "Calculus I",
  "topic": "Derivatives",
  "title": "Logarithmic differentiation with variable power",
  "prompt": "For x>0, y=x^x/(x+1). Derive y′ using logarithmic differentiation and enter y′(1).",
  "answer": [
    "0.25"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Logs turn the variable exponent into a product.",
  "setup": "Begin ln y=x ln x−ln(x+1).",
  "solution": "1. Because y>0, take logarithms: ln y=x ln x−ln(x+1).\n2. Differentiate: y′/y=ln x+1−1/(x+1), using the product rule on x ln x.\n3. Multiply by y: y′=[x^x/(x+1)][ln x+1−1/(x+1)].\n4. At x=1, y=1/2 and the bracket is 1/2, so y′(1)=1/4.",
  "diagram": "",
  "hub": "derivatives",
  "subtopic": "Logarithmic differentiation with variable power",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Logarithmic differentiation with variable power",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 0.25,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-16",
  "subject": "Calculus I",
  "topic": "Derivatives",
  "title": "Inverse trig chain rule",
  "prompt": "Let f(x)=arctan(2x)+arcsin(x/2). Find f′(0). Use radians.",
  "answer": [
    "2.5"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Each inverse trigonometric term has its own inner derivative.",
  "setup": "Use arctan and arcsin derivative rules with u=2x and u=x/2.",
  "solution": "1. Use d(arctan u)/dx=u′/(1+u²). The first derivative term is 2/(1+4x²).\n2. Use d(arcsin u)/dx=u′/√(1−u²). The second term is (1/2)/√(1−x²/4).\n3. Therefore f′(x)=2/(1+4x²)+1/[2√(1−x²/4)] for −2<x<2.\n4. At zero, f′(0)=2+1/2=2.5.",
  "diagram": "",
  "hub": "derivatives",
  "subtopic": "Inverse trig chain rule",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Inverse trig chain rule",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 2.5,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-17",
  "subject": "Calculus I",
  "topic": "Related rates",
  "title": "A conical tank fills",
  "prompt": "An inverted conical tank is 6 m tall with top radius 3 m. Water enters at 2 m³/min. Find dh/dt when water depth h=2 m.",
  "answer": [
    "0.6366197723675814"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "The water radius changes with depth.",
  "setup": "Substitute r=h/2 into V=πr²h/3.",
  "solution": "1. Similar triangles give r/h=3/6=1/2, hence r=h/2.\n2. Volume V=πr²h/3=πh³/12; eliminate r before differentiating.\n3. Differentiate with respect to time: dV/dt=(πh²/4)dh/dt.\n4. dh/dt=4(dV/dt)/(πh²)=4(2)/(π·4)=2/π≈0.636620 m/min.\n5. Units: volume/time divided by area gives length/time.",
  "diagram": "",
  "hub": "related",
  "subtopic": "A conical tank fills",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "m/min",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "A conical tank fills",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 0.6366197723675814,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-18",
  "subject": "Calculus I",
  "topic": "Critical points",
  "title": "Fence beside a river",
  "prompt": "You have 120 m of fence for three sides of a rectangular pen beside a straight river; the river forms the fourth side. Find the width perpendicular to the river that maximizes area.",
  "answer": [
    "30"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Write the area in one variable using the fence constraint.",
  "setup": "Use A(w)=w(120−2w).",
  "solution": "1. Let w be the perpendicular width and l the parallel length. Constraint: 2w+l=120, hence l=120−2w.\n2. Area A=wl=w(120−2w)=120w−2w²; feasible domain 0≤w≤60.\n3. A′=120−4w=0 gives w=30. A″=−4<0, so this is a strict maximum.\n4. Endpoints give zero area; w=30 gives l=60 and A=1800 m². Thus the absolute maximizing width is 30 m.",
  "diagram": "",
  "hub": "critical",
  "subtopic": "Fence beside a river",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "m",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Fence beside a river",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 30,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-19",
  "subject": "Calculus I",
  "topic": "Critical points",
  "title": "An open-top box",
  "prompt": "Cut equal squares of side x from each corner of a 12 cm by 12 cm sheet and fold an open box. Find the x that maximizes volume.",
  "answer": [
    "2"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Include the physical domain when comparing critical points.",
  "setup": "Differentiate V=x(12−2x)² using product and chain rules.",
  "solution": "1. Volume V=x(12−2x)², with 0≤x≤6; endpoints are degenerate boxes.\n2. Product and chain rules: V′=(12−2x)²−4x(12−2x)=(12−2x)(12−6x).\n3. Interior critical point is x=2; x=6 is the endpoint.\n4. For 0<x<2, V′>0; for 2<x<6, V′<0. V(0)=V(6)=0 and V(2)=128 cm³.\n5. Therefore x=2 cm is the global maximizer.",
  "diagram": "",
  "hub": "critical",
  "subtopic": "An open-top box",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "cm",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "An open-top box",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 2,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-20",
  "subject": "Calculus I",
  "topic": "Approximation and mean value theorem",
  "title": "A Mean Value Theorem point",
  "prompt": "For f(x)=x³ on [−1,2], find every c guaranteed by the Mean Value Theorem.",
  "answer": [
    "c=1"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Candidate points must lie in the open interval.",
  "setup": "Equate f′(c) to the secant slope.",
  "solution": "1. A polynomial is continuous on the closed interval and differentiable on its interior, so the hypotheses hold.\n2. The secant slope is [f(2)−f(−1)]/[2−(−1)]=(8+1)/3=3.\n3. f′(c)=3c²=3, giving c=±1.\n4. Only c=1 lies strictly inside (−1,2); c=−1 is an endpoint and must be rejected.",
  "diagram": "",
  "hub": "approximation",
  "subtopic": "A Mean Value Theorem point",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "A Mean Value Theorem point",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-21",
  "subject": "Calculus I",
  "topic": "Critical points",
  "title": "Stationary is not the same as inflection",
  "prompt": "For f(x)=x⁴−4x³, locate all inflection points and state the concavity intervals.",
  "answer": [
    "(0,0) and (2,-16)"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Factor f″ and check its sign on all three intervals.",
  "setup": "Compute two derivatives before testing for concavity changes.",
  "solution": "1. f′=4x³−12x²; f″=12x²−24x=12x(x−2).\n2. f″=0 at x=0 and 2. Test signs rather than declaring every zero an inflection automatically.\n3. For x<0 both factors are negative, so f″>0; for 0<x<2 it is negative; for x>2 it is positive.\n4. Concavity changes at both candidates. f(0)=0 and f(2)=16−32=−16.\n5. Inflections are (0,0) and (2,−16); concave up on (−∞,0) and (2,∞), down on (0,2).",
  "diagram": "",
  "hub": "critical",
  "subtopic": "Stationary is not the same as inflection",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Stationary is not the same as inflection",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-22",
  "subject": "Calculus I",
  "topic": "Limits",
  "title": "A second-order zero over zero",
  "prompt": "Evaluate lim x→0 of (e^(2x)−1−2x)/x². Justify any use of L’Hôpital’s Rule.",
  "answer": [
    "2"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "One differentiation still leaves an indeterminate form.",
  "setup": "Differentiate numerator and denominator separately only after checking 0/0.",
  "solution": "1. Direct substitution gives 0/0, an indeterminate form. Both functions are differentiable near zero and denominator derivative 2x is nonzero off zero.\n2. Apply L’Hôpital once: lim (2e^(2x)−2)/(2x), still 0/0.\n3. Apply it again: lim 4e^(2x)/2. The denominator derivative is now 2≠0.\n4. Substitution gives 4/2=2. The existence of this final limit justifies the preceding applications.",
  "diagram": "",
  "hub": "limits",
  "subtopic": "A second-order zero over zero",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "A second-order zero over zero",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 2,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-23",
  "subject": "Calculus I",
  "topic": "Integrals, substitution and the FTC",
  "title": "Substitution with transformed bounds",
  "prompt": "Evaluate ∫₀¹ x(1+x²)³ dx.",
  "answer": [
    "1.875"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "The derivative of the inner expression is proportional to x.",
  "setup": "Let u=1+x² and transform both bounds.",
  "solution": "1. Choose u=1+x², so du=2x dx and x dx=du/2.\n2. Transform limits: x=0 gives u=1; x=1 gives u=2.\n3. The integral becomes (1/2)∫₁²u³ du=(1/2)[u⁴/4]₁².\n4. (2⁴−1⁴)/8=15/8=1.875. Do not reuse x bounds on an antiderivative in u.",
  "diagram": "",
  "hub": "integration",
  "subtopic": "Substitution with transformed bounds",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "Substitution with transformed bounds",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 1.875,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-24",
  "subject": "Calculus I",
  "topic": "Integrals, substitution and the FTC",
  "title": "FTC with two moving endpoints",
  "prompt": "Let F(x)=∫ from x to x² of √(1+t²) dt. Find F′(1).",
  "answer": [
    "1.4142135623730951"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Both the upper and lower bounds move.",
  "setup": "Differentiate G(x²)−G(x), including the lower-bound minus sign.",
  "solution": "1. Choose an antiderivative G with G′(t)=√(1+t²), continuous for every real t.\n2. FTC writes F(x)=G(x²)−G(x).\n3. Chain rule gives F′(x)=2x√(1+x⁴)−√(1+x²).\n4. At x=1, F′(1)=2√2−√2=√2≈1.41421. Even though F(1)=0, its derivative need not vanish.",
  "diagram": "",
  "hub": "integration",
  "subtopic": "FTC with two moving endpoints",
  "difficulty": "Integration",
  "type": "Calculation",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "number",
  "objective": "FTC with two moving endpoints",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units.",
  "value": 1.4142135623730951,
  "relTol": 0.005,
  "absTol": 1e-08
},
{
  "id": "v3-25",
  "subject": "Organic Chemistry I",
  "topic": "Functional groups",
  "title": "Choose the principal suffix",
  "prompt": "Name HOOC–CH(Br)–CH(OH)–CH₂–CH₃ without stereodescriptors. Explain the parent, suffix, numbering and prefix order.",
  "answer": [
    "2-bromo-3-hydroxypentanoic acid"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Use the highest-priority functional group as the suffix.",
  "setup": "Number the acid carbon C1; treat OH as a prefix.",
  "solution": "1. Identify carboxylic acid, alcohol and bromo substituent. Carboxylic acid has priority over alcohol for the principal suffix.\n2. Include the acid carbon in the longest eligible chain: five carbons gives pentanoic acid; the acid carbon is C1.\n3. Br is at C2 and OH at C3. The lower-priority alcohol becomes the hydroxy prefix.\n4. Alphabetize bromo before hydroxy: 2-bromo-3-hydroxypentanoic acid. No R/S descriptor can be inferred from this flat condensed formula.",
  "diagram": "",
  "hub": "groups",
  "subtopic": "Choose the principal suffix",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Choose the principal suffix",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-26",
  "subject": "Organic Chemistry I",
  "topic": "Functional groups",
  "title": "Name a multifunctional unsaturated acid",
  "prompt": "For HOOC–CH(OH)–CH=CH–CH₃, the C2 center is R and the higher-priority groups across C3=C4 are opposite. Give the full name and justify it.",
  "answer": [
    "(2R,3E)-2-hydroxypent-3-enoic acid"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Keep stereochemical locants separate from substituent locants.",
  "setup": "Build the acid name, then prepend (2R,3E).",
  "solution": "1. The carboxylic acid determines the suffix; choose the five-carbon chain containing it and the double bond.\n2. Number from COOH: OH at C2 and the double bond begins at C3. The base name is 2-hydroxypent-3-enoic acid.\n3. At each double-bond carbon, the carbon substituent outranks H. Opposite higher-priority groups give E with locant 3.\n4. The supplied R center has locant 2. Combine descriptors: (2R,3E)-2-hydroxypent-3-enoic acid.",
  "diagram": "",
  "hub": "groups",
  "subtopic": "Name a multifunctional unsaturated acid",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Name a multifunctional unsaturated acid",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-27",
  "subject": "Organic Chemistry I",
  "topic": "Acids, bases and pKa",
  "title": "Proton transfer and Lewis roles",
  "prompt": "For CH₃COOH + CH₃NH₂ ⇌ CH₃COO⁻ + CH₃NH₃⁺, use supplied same-solvent pKa values 4.8 and 10.6. Identify acid/base and Lewis roles, estimate K, and predict direction.",
  "answer": [
    "K≈6.31e5; products favored"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Compare the acids on opposite sides, not the two reactants.",
  "setup": "Use log₁₀K=pKa(product acid)−pKa(reactant acid).",
  "solution": "1. Acetic acid donates a proton (Brønsted acid); methylamine accepts it (Brønsted base). Products are acetate and methylammonium.\n2. The nitrogen lone pair donates to the acidic proton: amine is the Lewis base and the proton is the electron-pair acceptor.\n3. For HA+B⇌A⁻+HB⁺, K≈10^[pKa(HB⁺)−pKa(HA)]. Here ΔpKa=10.6−4.8=5.8.\n4. K≈10^5.8≈6.31×10⁵, so products are favored. Methylammonium is the weaker acid because it has the higher pKa.\n5. These are supplied approximations for a common solvent scale; mixing solvent-specific tables would invalidate the comparison.",
  "diagram": "",
  "hub": "acids",
  "subtopic": "Proton transfer and Lewis roles",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Proton transfer and Lewis roles",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-28",
  "subject": "Organic Chemistry I",
  "topic": "Acids, bases and pKa",
  "title": "ARIO explains acidity trends",
  "prompt": "Explain why phenol is more acidic than cyclohexanol, chloroacetic acid more acidic than acetic acid, and acetylene more acidic than ethene. State which ARIO effect controls each comparison.",
  "answer": [
    "resonance; induction; orbital"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Identify where the conjugate-base charge can spread or be stabilized.",
  "setup": "Draw each conjugate base and compare its charge environment.",
  "solution": "1. Compare conjugate-base stability rather than the neutral acids alone.\n2. Phenoxide delocalizes negative charge into the aromatic ring; cyclohexoxide lacks that resonance. Resonance stabilizes phenoxide, favoring phenol acidity.\n3. Chlorine withdraws electron density through sigma bonds and stabilizes chloroacetate: this is induction, stronger near the charged group.\n4. An acetylide negative charge occupies an sp orbital (50% s character), versus an sp² orbital (33%) for a vinyl anion. Greater s character holds charge closer to the nucleus.\n5. ARIO organizes atom, resonance, induction and orbital comparisons; it is not a claim that all effects can be ranked without considering structure and solvent.",
  "diagram": "",
  "hub": "acids",
  "subtopic": "ARIO explains acidity trends",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "ARIO explains acidity trends",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-29",
  "subject": "Organic Chemistry I",
  "topic": "Resonance and electron bookkeeping",
  "title": "Contributors and a halogen paradox",
  "prompt": "Rank the two amide contributors O=C–NH₂ and ⁻O–C=NH₂⁺ (same carbon substituent) and explain why chlorine on benzene is deactivating yet ortho/para directing in electrophilic aromatic substitution.",
  "answer": [
    "neutral amide major; chlorine withdraws inductively and donates by resonance"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Rate and positional preference need not have the same dominant electronic effect.",
  "setup": "Check octets and formal charges for the amide; separate induction from resonance for chlorine.",
  "solution": "1. Both amide contributors preserve atom connectivity and complete octets. The neutral contributor avoids charge separation and is the larger contributor.\n2. The charged contributor is still important: nitrogen donates a lone pair, giving partial C–N double-bond character. Moving nuclei would not be resonance.\n3. Chlorine withdraws inductively through sigma bonds because it is electronegative; the net effect slows electrophilic substitution relative to benzene.\n4. Chlorine lone-pair resonance donation can stabilize ortho/para substitution intermediates more than meta intermediates, explaining direction without implying overall activation.\n5. Use octet completion first when comparing second-row contributors, then charge magnitude and placement; a resonance hybrid is not rapidly switching structures.",
  "diagram": "",
  "hub": "resonance",
  "subtopic": "Contributors and a halogen paradox",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Contributors and a halogen paradox",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-30",
  "subject": "Organic Chemistry I",
  "topic": "Resonance and electron bookkeeping",
  "title": "Aromaticity and heteroatom lone pairs",
  "prompt": "Classify pyridine, pyrrole, furan, thiophene, planar cyclobutadiene, and tub-shaped cyclooctatetraene as aromatic, antiaromatic or nonaromatic. Explain the participating electrons.",
  "answer": [
    "first four aromatic; cyclobutadiene antiaromatic; cyclooctatetraene nonaromatic"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Count only electrons in the continuous cyclic p system.",
  "setup": "Apply geometry and conjugation tests before the 4n+2 electron test.",
  "solution": "1. Aromaticity requires a cyclic, planar, continuously conjugated p-orbital loop with 4n+2 π electrons; 4n in such a loop is antiaromatic.\n2. Pyridine has 6 π electrons from three double bonds; its in-plane nitrogen lone pair does not join that π system.\n3. Pyrrole has 4 π electrons from two double bonds plus the nitrogen lone pair, giving 6. Nitrogen is approximately sp², despite the single bonds in a Lewis drawing.\n4. Furan and thiophene each use 4 double-bond electrons plus ONE heteroatom lone pair, giving 6; their other lone pair is not counted.\n5. Planar cyclobutadiene has a conjugated 4-electron loop: antiaromatic. Tub-shaped cyclooctatetraene avoids planarity and is nonaromatic, not antiaromatic merely because it has 8 π electrons.",
  "diagram": "",
  "hub": "resonance",
  "subtopic": "Aromaticity and heteroatom lone pairs",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Aromaticity and heteroatom lone pairs",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-31",
  "subject": "Organic Chemistry I",
  "topic": "Chirality",
  "title": "CIP isotopes and multiple bonds",
  "prompt": "At a stereocenter compare –OH, –C(=O)H, –CH₂OH and –D. Rank them. With the lowest group away and 1→2→3 counterclockwise, assign R/S. Also compare directly attached D and H.",
  "answer": [
    "OH > CHO > CH2OH > D; S; D > H"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Atomic number is compared before isotope mass.",
  "setup": "Expand the C=O as a duplicate O in the CIP neighbor list.",
  "solution": "1. Compare directly attached atoms first: O (8) outranks C (6), which outranks hydrogen isotopes (1). Thus OH is first and D last.\n2. To break the C/C tie, expand multiple bonds for CIP: aldehyde carbon has [O,O,H]; hydroxymethyl carbon has [O,H,H].\n3. Compare sorted lists at the first difference: O beats H, so CHO outranks CH₂OH.\n4. With group 4 away, counterclockwise 1→2→3 means S.\n5. Among isotopes of the same element, larger mass wins: D (²H) outranks ¹H. Isotope mass does not let D outrank carbon.",
  "diagram": "",
  "hub": "stereo",
  "subtopic": "CIP isotopes and multiple bonds",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "CIP isotopes and multiple bonds",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-32",
  "subject": "Organic Chemistry I",
  "topic": "Conformations and intermolecular forces",
  "title": "Newman and chair stability",
  "prompt": "Explain the lowest-energy butane Newman conformation and the preferred chair of methylcyclohexane. Does a chair flip change cis/trans relationships?",
  "answer": [
    "anti staggered; equatorial methyl; cis/trans unchanged"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Separate torsional strain from steric contacts.",
  "setup": "Compare anti/gauche in Newman views and 1,3-diaxial contacts in chairs.",
  "solution": "1. Look down butane C2–C3. Staggered conformations reduce eclipsing torsional strain.\n2. Among staggered conformations, anti separates the methyl groups by 180° and is lower in energy than the 60° gauche arrangement under ordinary conditions.\n3. An axial methyl group on cyclohexane has unfavorable 1,3-diaxial contacts. Equatorial methyl reduces those contacts and is preferred.\n4. A chair flip exchanges axial/equatorial but preserves up/down. Therefore it preserves cis/trans and absolute configuration; it changes conformation, not connectivity.",
  "diagram": "",
  "hub": "conformations",
  "subtopic": "Newman and chair stability",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Newman and chair stability",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-33",
  "subject": "Organic Chemistry I",
  "topic": "Chirality",
  "title": "Meso, enantiomers and optical rotation",
  "prompt": "For 2,3-dibromobutane, compare (2R,3R), (2S,3S) and (2R,3S). Which are enantiomers, which pairs are diastereomers, and which is meso? Can R/S or erythro/threo alone determine the sign of optical rotation?",
  "answer": [
    "RR/SS enantiomers; RS meso; other pairs diastereomers; sign cannot be inferred"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Symmetry can make a molecule with stereocenters achiral.",
  "setup": "Compare mirror pairs, then check internal symmetry before calling a structure chiral.",
  "solution": "1. (2R,3R) and (2S,3S) invert both centers and are nonsuperimposable mirror images: enantiomers.\n2. (2R,3S) is identical to (2S,3R) because the molecule has matching ends and an internal symmetry relationship. It is achiral meso.\n3. The meso structure compared with RR or SS is a diastereomer: stereoisomers that are not mirror partners.\n4. A pure meso sample has no net optical rotation. A racemic RR/SS mixture also has zero rotation, but by external cancellation between enantiomers.\n5. R/S specifies configuration; (+)/(−), sometimes d/l, is measured optical rotation. Erythro/threo describes relative arrangement in a specified Fischer convention. None alone predicts rotation sign. D/L is a separate convention, not interchangeable with d/l.",
  "diagram": "",
  "hub": "stereo",
  "subtopic": "Meso, enantiomers and optical rotation",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Meso, enantiomers and optical rotation",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-34",
  "subject": "Organic Chemistry I",
  "topic": "Reaction energy and alkene chemistry",
  "title": "Rate orders and an activation barrier",
  "prompt": "At fixed temperature, doubling [A] with [B] fixed quadruples rate; doubling [B] with [A] fixed doubles rate. Find the rate law orders. Separately, k doubles from 300 K to 310 K; estimate Ea using R=8.314 J/(mol·K) and constant A.",
  "answer": [
    "rate=k[A]^2[B]; overall order 3; Ea≈53.6 kJ/mol"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Use concentration ratios for orders and a log ratio for temperatures.",
  "setup": "Solve 2^a=4, 2^b=2; subtract two log-Arrhenius equations.",
  "solution": "1. For rate=k[A]^a[B]^b, 2^a=4 implies a=2 and 2^b=2 implies b=1. Overall order is 3.\n2. Take ln of Arrhenius: ln k=ln A−Ea/(RT). Subtract the two temperature equations.\n3. ln(k₂/k₁)=(Ea/R)(1/T₁−1/T₂), so Ea=R ln 2/(1/300−1/310).\n4. Ea≈53594 J/mol=53.6 kJ/mol. The positive sign is consistent with k increasing as temperature rises.\n5. Units: [J/(mol·K)] divided by [1/K] gives J/mol. Experimental rate orders need not match reaction stoichiometric coefficients.",
  "diagram": "",
  "hub": "reactions",
  "subtopic": "Rate orders and an activation barrier",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Rate orders and an activation barrier",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-35",
  "subject": "Organic Chemistry I",
  "topic": "Reaction energy and alkene chemistry",
  "title": "Bond energies and free energy",
  "prompt": "For gas-phase CH₄+Cl₂→CH₃Cl+HCl, use bond enthalpies C–H=413, Cl–Cl=243, C–Cl=328 and H–Cl=431 kJ/mol. Estimate ΔH. Separately, a reaction has ΔH°=−20.0 kJ/mol and ΔS°=−50.0 J/(mol·K) at 300 K: find ΔG° and K (R=8.314 J/(mol·K)).",
  "answer": [
    "ΔH≈−103 kJ/mol; ΔG°=−5 kJ/mol; K≈7.42"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Keep the two reactions separate and convert entropy units before subtracting.",
  "setup": "Use broken minus formed, then ΔG°=ΔH°−TΔS° and ln K=−ΔG°/(RT).",
  "solution": "1. Only one C–H and one Cl–Cl are broken; one C–Cl and one H–Cl form. Unchanged bonds cancel.\n2. ΔH≈ΣD(broken)−ΣD(formed)=(413+243)−(328+431)=−103 kJ/mol. This is a gas-phase bond-energy estimate.\n3. For the separate reaction, convert entropy to −0.0500 kJ/(mol·K). Then ΔG°=ΔH°−TΔS°=−20−300(−0.0500)=−5.00 kJ/mol.\n4. From ΔG°=−RT ln K, ln K=5000/(8.314·300)≈2.00465; K≈7.42 (dimensionless).\n5. Negative standard free energy favors products at equilibrium; it does not specify the reaction rate or the actual direction for every starting composition.",
  "diagram": "",
  "hub": "reactions",
  "subtopic": "Bond energies and free energy",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Bond energies and free energy",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
},
{
  "id": "v3-36",
  "subject": "Organic Chemistry I",
  "topic": "SN1, SN2, E1 and E2",
  "title": "Choose among substitution and elimination",
  "prompt": "Predict the predominant pathway for (a) CH₃Br+NaCN in DMSO, (b) tert-butyl bromide+KOtBu with heat, and (c) tert-butyl bromide in water at room temperature. Explain stereochemical or competition limits.",
  "answer": [
    "a SN2; b E2; c SN1 with possible E1 competition"
  ],
  "clarify": "Answer the requested quantity or explanation; show your reasoning before opening the worked solution.",
  "hint": "Check substrate substitution, then nucleophile/base strength and solvent.",
  "setup": "Rule out SN2 at tertiary centers and E2 where no β-H exists.",
  "solution": "1. (a) A methyl substrate has little steric hindrance; CN⁻ is a good nucleophile and polar aprotic DMSO supports SN2. There is no β-carbon for elimination.\n2. (b) A tertiary center prevents ordinary backside SN2. Strong bulky base and heat favor E2; a β-H and leaving group are removed concertedly to give 2-methylpropene.\n3. (c) A tertiary carbocation can form in polar protic water. With a weak base/nucleophile, SN1 solvolysis gives tert-butanol, with E1 competition possible.\n4. E2 requires favorable antiperiplanar geometry. SN2 at a stereogenic carbon inverts local geometry, while SN1 can lose stereospecificity; neither tert-butyl nor methyl carbon here is a stereocenter.\n5. Product ratios depend on temperature, solvent and concentrations; these are predominant-pathway predictions, not guarantees of a single product.",
  "diagram": "",
  "hub": "substitution",
  "subtopic": "Choose among substitution and elimination",
  "difficulty": "Integration",
  "type": "Conceptual",
  "minutes": 7,
  "source": "Original authored practice • university-style extension; see CURRICULUM-SOURCES.md",
  "units": "",
  "rubric": [
    "State the relevant principle and assumptions",
    "Show intermediate reasoning or symbolic derivation",
    "Check the requested result, units or stereochemical convention"
  ],
  "kind": "rubric",
  "objective": "Choose among substitution and elimination",
  "calculate": "Carry out the symbolic setup, then substitute the supplied values. Check signs, assumptions and units."
}
];

/* Original exam-ready expansion: 20 questions per course. */
bank.push(...[
  {
    "id": "v4-1",
    "subject": "Calculus I",
    "topic": "Logarithm domain before algebra",
    "title": "Logarithm domain before algebra",
    "prompt": "Solve ln(x−1)+ln(x+1)=ln(8) over the real numbers. Which is the complete solution set?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. {3}"
      },
      {
        "value": "B",
        "label": "B. {−3,3}"
      },
      {
        "value": "C",
        "label": "C. {−3}"
      },
      {
        "value": "D",
        "label": "D. {√8}"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Determine the original domain before combining logarithms.",
    "setup": "Intersect x>1 and x>−1, then use the product rule for logarithms.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nThe logarithms require x−1>0 and x+1>0, hence x>1. Combine the logs to obtain ln(x²−1)=ln(8), so x²=9. Of the algebraic candidates ±3, only 3 is in the original domain.\n\nWhy the other choices fail:\nB: Both roots solve the transformed polynomial, but −3 violates the logarithm domain.\nC: The negative root makes both log arguments negative.\nD: Multiplying the arguments gives x²−1, not x².",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "Both roots solve the transformed polynomial, but −3 violates the logarithm domain."
      },
      {
        "option": "C",
        "explanation": "The negative root makes both log arguments negative."
      },
      {
        "option": "D",
        "explanation": "Multiplying the arguments gives x²−1, not x²."
      }
    ],
    "diagram": "",
    "hub": "functions",
    "subtopic": "Logarithm domain before algebra",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "functions / Logarithm domain before algebra",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Logarithm domain before algebra"
  },
  {
    "id": "v4-2",
    "subject": "Calculus I",
    "topic": "Conjugates and removable limits",
    "title": "Conjugates and removable limits",
    "prompt": "Evaluate lim(x→4) (√(x+5)−3)/(x−4).",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Does not exist"
      },
      {
        "value": "B",
        "label": "B. 1/6"
      },
      {
        "value": "C",
        "label": "C. 0"
      },
      {
        "value": "D",
        "label": "D. 1/3"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Rationalize the numerator.",
    "setup": "Multiply numerator and denominator by √(x+5)+3.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nMultiply by the conjugate √(x+5)+3. The numerator becomes x−4, which cancels for x≠4. The resulting function 1/(√(x+5)+3) approaches 1/6. The original quotient is undefined at 4, but its limit exists.\n\nWhy the other choices fail:\nC: Direct substitution gives 0/0, an indeterminate form rather than zero.\nD: The conjugate denominator tends to 3+3, not 3.\nA: A missing value at the point does not prevent a two-sided limit.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "Direct substitution gives 0/0, an indeterminate form rather than zero."
      },
      {
        "option": "D",
        "explanation": "The conjugate denominator tends to 3+3, not 3."
      },
      {
        "option": "A",
        "explanation": "A missing value at the point does not prevent a two-sided limit."
      }
    ],
    "diagram": "",
    "hub": "limits",
    "subtopic": "Conjugates and removable limits",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "limits / Conjugates and removable limits",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Conjugates and removable limits"
  },
  {
    "id": "v4-3",
    "subject": "Calculus I",
    "topic": "One-sided signs at a pole",
    "title": "One-sided signs at a pole",
    "prompt": "For f(x)=(x²−1)/(x−1)², which describes the one-sided limits at x=1?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Both 2"
      },
      {
        "value": "B",
        "label": "B. Left +∞; right −∞"
      },
      {
        "value": "C",
        "label": "C. Left −∞; right +∞"
      },
      {
        "value": "D",
        "label": "D. Both +∞"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Factor before analyzing the signs.",
    "setup": "Write x²−1=(x−1)(x+1), then test each side of 1.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nFor x≠1, cancel one factor x−1 to obtain (x+1)/(x−1). Near 1 the numerator is positive. The denominator is negative on the left and positive on the right, giving −∞ and +∞ respectively; there is no two-sided limit.\n\nWhy the other choices fail:\nD: The original denominator is squared, but the numerator changes sign.\nA: Cancelling both denominator factors incorrectly removes the pole.\nB: The sign of x−1 is negative on the left, not on the right.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "The original denominator is squared, but the numerator changes sign."
      },
      {
        "option": "A",
        "explanation": "Cancelling both denominator factors incorrectly removes the pole."
      },
      {
        "option": "B",
        "explanation": "The sign of x−1 is negative on the left, not on the right."
      }
    ],
    "diagram": "",
    "hub": "limits",
    "subtopic": "One-sided signs at a pole",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "limits / One-sided signs at a pole",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "One-sided signs at a pole"
  },
  {
    "id": "v4-4",
    "subject": "Calculus I",
    "topic": "Join two branches smoothly",
    "title": "Join two branches smoothly",
    "prompt": "Let f(x)=ax+b for x<1 and f(x)=x² for x≥1. Which (a,b) makes f differentiable at 1?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. (1,0)"
      },
      {
        "value": "B",
        "label": "B. (2,1)"
      },
      {
        "value": "C",
        "label": "C. (0,1)"
      },
      {
        "value": "D",
        "label": "D. (2,−1)"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "First match values, then match slopes.",
    "setup": "Use a+b=1 and a=2(1).",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nDifferentiability requires both continuity and matching one-sided derivatives. Continuity gives a+b=1. The left slope is a and the right derivative at 1 is 2, so a=2 and b=−1. These conditions also give a shared function value of 1.\n\nWhy the other choices fail:\nA: This pair matches values but gives left slope 1 instead of 2.\nB: The slopes match, but the left limit is 3 rather than 1.\nC: The constant branch matches the value but has zero slope.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "This pair matches values but gives left slope 1 instead of 2."
      },
      {
        "option": "B",
        "explanation": "The slopes match, but the left limit is 3 rather than 1."
      },
      {
        "option": "C",
        "explanation": "The constant branch matches the value but has zero slope."
      }
    ],
    "diagram": "",
    "hub": "continuity",
    "subtopic": "Join two branches smoothly",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "continuity / Join two branches smoothly",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Join two branches smoothly"
  },
  {
    "id": "v4-5",
    "subject": "Calculus I",
    "topic": "Oscillation suppressed by a power",
    "title": "Oscillation suppressed by a power",
    "prompt": "Set f(0)=0 and f(x)=x² sin(1/x) for x≠0. What is true at zero?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Continuous and differentiable, f′(0)=0"
      },
      {
        "value": "B",
        "label": "B. Continuous but not differentiable"
      },
      {
        "value": "C",
        "label": "C. Not continuous"
      },
      {
        "value": "D",
        "label": "D. Differentiable with f′(0)=1"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Bound both the function and its difference quotient.",
    "setup": "Use |sin(1/x)|≤1 before taking either limit.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nSince |x²sin(1/x)|≤x², the squeeze theorem proves continuity at zero. The difference quotient at zero is x sin(1/x), whose absolute value is at most |x|. It therefore tends to zero, establishing differentiability and f′(0)=0.\n\nWhy the other choices fail:\nB: The amplitude shrinks quickly enough for the difference quotient to converge.\nC: Bounded sine times x² tends to zero despite oscillation.\nD: The derivative must be computed using the difference quotient, whose limit is zero.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "The amplitude shrinks quickly enough for the difference quotient to converge."
      },
      {
        "option": "C",
        "explanation": "Bounded sine times x² tends to zero despite oscillation."
      },
      {
        "option": "D",
        "explanation": "The derivative must be computed using the difference quotient, whose limit is zero."
      }
    ],
    "diagram": "",
    "hub": "continuity",
    "subtopic": "Oscillation suppressed by a power",
    "difficulty": "Integration",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Challenge · original practice",
    "topicScope": "continuity / Oscillation suppressed by a power",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Oscillation suppressed by a power"
  },
  {
    "id": "v4-6",
    "subject": "Calculus I",
    "topic": "Product and chain rules together",
    "title": "Product and chain rules together",
    "prompt": "For f(x)=x²e^(−3x), find f′(1).",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 5e^(−3)"
      },
      {
        "value": "B",
        "label": "B. −e^(−3)"
      },
      {
        "value": "C",
        "label": "C. 2e^(−3)"
      },
      {
        "value": "D",
        "label": "D. −3e^(−3)"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Both factors depend on x.",
    "setup": "Use (uv)′=u′v+uv′ and d(e^(−3x))/dx=−3e^(−3x).",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nApply the product rule: f′(x)=2xe^(−3x)−3x²e^(−3x). Factor e^(−3x)(2x−3x²). At x=1 this becomes e^(−3)(2−3)=−e^(−3), so the function is locally decreasing there.\n\nWhy the other choices fail:\nC: This differentiates x² but omits the derivative of the exponential factor.\nD: This differentiates only the exponential factor.\nA: The inner derivative of −3x is −3, not +3.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "This differentiates x² but omits the derivative of the exponential factor."
      },
      {
        "option": "D",
        "explanation": "This differentiates only the exponential factor."
      },
      {
        "option": "A",
        "explanation": "The inner derivative of −3x is −3, not +3."
      }
    ],
    "diagram": "",
    "hub": "derivatives",
    "subtopic": "Product and chain rules together",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "derivatives / Product and chain rules together",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Product and chain rules together"
  },
  {
    "id": "v4-7",
    "subject": "Calculus I",
    "topic": "Logarithmic differentiation at a point",
    "title": "Logarithmic differentiation at a point",
    "prompt": "Let y=x^x for x>0. Find the slope of its tangent at x=2.",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 4 ln 2"
      },
      {
        "value": "B",
        "label": "B. 2·2^1"
      },
      {
        "value": "C",
        "label": "C. 4(ln 2+1)"
      },
      {
        "value": "D",
        "label": "D. 2"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Use logarithms to bring the exponent down.",
    "setup": "Differentiate ln y=x ln x implicitly.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nTake logarithms: ln y=x ln x. Differentiate to get y′/y=ln x+1. Thus y′=x^x(ln x+1), and at 2 the slope is 4(ln 2+1). Both the base and exponent vary, so neither a simple power rule nor a constant-base exponential rule alone applies.\n\nWhy the other choices fail:\nD: Neither a constant derivative nor the value of x gives the derivative of x^x.\nA: The extra +1 comes from differentiating ln x in the product x ln x.\nB: This is the power-rule result for x², not the derivative of x^x.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "Neither a constant derivative nor the value of x gives the derivative of x^x."
      },
      {
        "option": "A",
        "explanation": "The extra +1 comes from differentiating ln x in the product x ln x."
      },
      {
        "option": "B",
        "explanation": "This is the power-rule result for x², not the derivative of x^x."
      }
    ],
    "diagram": "",
    "hub": "derivatives",
    "subtopic": "Logarithmic differentiation at a point",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "derivatives / Logarithmic differentiation at a point",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Logarithmic differentiation at a point"
  },
  {
    "id": "v4-8",
    "subject": "Calculus I",
    "topic": "Implicit tangent with mixed variables",
    "title": "Implicit tangent with mixed variables",
    "prompt": "The curve x²+xy+y²=7 passes through (1,2). What is dy/dx there?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. −1/2"
      },
      {
        "value": "B",
        "label": "B. −2"
      },
      {
        "value": "C",
        "label": "C. 4/5"
      },
      {
        "value": "D",
        "label": "D. −4/5"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "The mixed term needs the product rule.",
    "setup": "Collect all y′ terms on one side after implicit differentiation.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nDifferentiate each term: 2x+y+xy′+2yy′=0. Group the slope terms to get y′=−(2x+y)/(x+2y). Substituting (1,2) gives −4/5. The product xy contributes both y and xy′.\n\nWhy the other choices fail:\nA: Ignoring the xy product changes both numerator and denominator.\nB: Dropping terms when collecting y′ gives the wrong denominator; it must be x+2y.\nC: Moving 2x+y to the other side introduces a minus sign.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "Ignoring the xy product changes both numerator and denominator."
      },
      {
        "option": "B",
        "explanation": "Dropping terms when collecting y′ gives the wrong denominator; it must be x+2y."
      },
      {
        "option": "C",
        "explanation": "Moving 2x+y to the other side introduces a minus sign."
      }
    ],
    "diagram": "",
    "hub": "derivatives",
    "subtopic": "Implicit tangent with mixed variables",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "derivatives / Implicit tangent with mixed variables",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Implicit tangent with mixed variables"
  },
  {
    "id": "v4-9",
    "subject": "Calculus I",
    "topic": "Stationary does not mean extreme",
    "title": "Stationary does not mean extreme",
    "prompt": "For f(x)=x³−3x on [−2,2], which describes its absolute extrema?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Minimum −2 at x=−2 and 1; maximum 2 at x=−1 and 2"
      },
      {
        "value": "B",
        "label": "B. Minimum −2 only at x=1; maximum 2 only at x=−1"
      },
      {
        "value": "C",
        "label": "C. Minimum −2 at x=−1; maximum 2 at x=1"
      },
      {
        "value": "D",
        "label": "D. Minimum −6 at x=−2; maximum 6 at x=2"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Compare critical points and endpoints.",
    "setup": "Build a value table for x=−2,−1,1,2.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nCritical points satisfy f′=3x²−3=0, so x=±1. Evaluate all four candidates: f(−2)=−2, f(−1)=2, f(1)=−2, f(2)=2. The endpoints tie the interior extrema, so all locations must be reported.\n\nWhy the other choices fail:\nB: Closed-interval absolute extrema require checking the endpoints too.\nC: The local maximum and minimum locations have been reversed.\nD: Substitution into x³−3x gives ±2 at the endpoints, not ±6.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "Closed-interval absolute extrema require checking the endpoints too."
      },
      {
        "option": "C",
        "explanation": "The local maximum and minimum locations have been reversed."
      },
      {
        "option": "D",
        "explanation": "Substitution into x³−3x gives ±2 at the endpoints, not ±6."
      }
    ],
    "diagram": "",
    "hub": "critical",
    "subtopic": "Stationary does not mean extreme",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "critical / Stationary does not mean extreme",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Stationary does not mean extreme"
  },
  {
    "id": "v4-10",
    "subject": "Calculus I",
    "topic": "A cusp in the critical set",
    "title": "A cusp in the critical set",
    "prompt": "For f(x)=|x−2| on (0,4), which statement is correct?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. x=2 is a local maximum"
      },
      {
        "value": "B",
        "label": "B. x=2 is critical and a local minimum, although f′(2) does not exist"
      },
      {
        "value": "C",
        "label": "C. There are no critical points because f′ is never zero"
      },
      {
        "value": "D",
        "label": "D. x=2 is critical with f′(2)=0"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Include points where the derivative is undefined.",
    "setup": "Compare the slopes of the two linear pieces.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nA critical number belongs to the domain and has derivative zero or undefined. At 2 the left slope is −1 and right slope is +1, so the derivative does not exist. Values on both sides exceed f(2)=0, giving a local minimum.\n\nWhy the other choices fail:\nC: Undefined derivatives at points in the domain also produce critical numbers.\nD: A corner has unequal one-sided slopes, not a horizontal tangent.\nA: The graph rises away from 2 in both directions.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "Undefined derivatives at points in the domain also produce critical numbers."
      },
      {
        "option": "D",
        "explanation": "A corner has unequal one-sided slopes, not a horizontal tangent."
      },
      {
        "option": "A",
        "explanation": "The graph rises away from 2 in both directions."
      }
    ],
    "diagram": "",
    "hub": "critical",
    "subtopic": "A cusp in the critical set",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "critical / A cusp in the critical set",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A cusp in the critical set"
  },
  {
    "id": "v4-11",
    "subject": "Calculus I",
    "topic": "Sliding ladder with changing height",
    "title": "Sliding ladder with changing height",
    "prompt": "A 10 m ladder rests against a vertical wall. Its foot moves away at 0.6 m/s. When the foot is 6 m from the wall, how fast is the top moving vertically?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 0.45 m/s"
      },
      {
        "value": "B",
        "label": "B. −0.6 m/s"
      },
      {
        "value": "C",
        "label": "C. −0.45 m/s"
      },
      {
        "value": "D",
        "label": "D. −0.8 m/s"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Find the height before substituting into the differentiated relation.",
    "setup": "Use y′=−(x/y)x′ with a fixed ladder length.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nThe geometry gives x²+y²=100, so at x=6 the height is y=8. Differentiate with respect to time: 2x x′+2y y′=0. Hence y′=−(6/8)(0.6)=−0.45 m/s. The negative sign means the top moves downward.\n\nWhy the other choices fail:\nD: This reverses the ratio x/y and uses y/x.\nA: The top falls as the foot moves away, so the vertical derivative is negative.\nB: Horizontal and vertical speeds are not generally equal.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "This reverses the ratio x/y and uses y/x."
      },
      {
        "option": "A",
        "explanation": "The top falls as the foot moves away, so the vertical derivative is negative."
      },
      {
        "option": "B",
        "explanation": "Horizontal and vertical speeds are not generally equal."
      }
    ],
    "diagram": "",
    "hub": "related",
    "subtopic": "Sliding ladder with changing height",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "related / Sliding ladder with changing height",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Sliding ladder with changing height"
  },
  {
    "id": "v4-12",
    "subject": "Calculus I",
    "topic": "A growing spherical bubble",
    "title": "A growing spherical bubble",
    "prompt": "A spherical bubble has dV/dt=12π cm³/s. At radius r=3 cm, what is dr/dt?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 1 cm/s"
      },
      {
        "value": "B",
        "label": "B. 4/3 cm/s"
      },
      {
        "value": "C",
        "label": "C. 3 cm/s"
      },
      {
        "value": "D",
        "label": "D. 1/3 cm/s"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Differentiate the volume formula before inserting the radius.",
    "setup": "Set V′=4πr²r′.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nWrite V=(4/3)πr³ and differentiate with respect to time: V′=4πr²r′. At r=3, 12π=36πr′, so r′=1/3 cm/s. The derivative of volume with respect to radius is the surface area.\n\nWhy the other choices fail:\nA: Dropping the factor of 3 from differentiating r³ gives the wrong coefficient.\nB: Using πr² instead of 4πr² misses the spherical surface-area factor.\nC: The requested quantity is radius change, not the radius itself.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "Dropping the factor of 3 from differentiating r³ gives the wrong coefficient."
      },
      {
        "option": "B",
        "explanation": "Using πr² instead of 4πr² misses the spherical surface-area factor."
      },
      {
        "option": "C",
        "explanation": "The requested quantity is radius change, not the radius itself."
      }
    ],
    "diagram": "",
    "hub": "related",
    "subtopic": "A growing spherical bubble",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "related / A growing spherical bubble",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A growing spherical bubble"
  },
  {
    "id": "v4-13",
    "subject": "Calculus I",
    "topic": "Linearization and its error direction",
    "title": "Linearization and its error direction",
    "prompt": "Using the tangent line to √x at x=9, estimate √9.3 and classify the estimate.",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 3.05, an overestimate"
      },
      {
        "value": "B",
        "label": "B. 3.05, an underestimate"
      },
      {
        "value": "C",
        "label": "C. 3.1, an overestimate"
      },
      {
        "value": "D",
        "label": "D. 3.3, an underestimate"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Evaluate both the slope and the sign of the second derivative.",
    "setup": "Use L(x)=f(9)+f′(9)(x−9).",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nThe tangent approximation is L(x)=3+(x−9)/6. At 9.3 this gives 3.05. Because the second derivative of √x is negative for x>0, the curve is concave down and its tangent lies above it, so the estimate is too large.\n\nWhy the other choices fail:\nB: Concave-down curves lie below their tangent lines locally.\nC: The derivative at 9 is 1/6, not 1/3.\nD: The change in the function is not the same as the change in x.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "Concave-down curves lie below their tangent lines locally."
      },
      {
        "option": "C",
        "explanation": "The derivative at 9 is 1/6, not 1/3."
      },
      {
        "option": "D",
        "explanation": "The change in the function is not the same as the change in x."
      }
    ],
    "diagram": "",
    "hub": "approximation",
    "subtopic": "Linearization and its error direction",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "approximation / Linearization and its error direction",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Linearization and its error direction"
  },
  {
    "id": "v4-14",
    "subject": "Calculus I",
    "topic": "Mean value theorem inside the interval",
    "title": "Mean value theorem inside the interval",
    "prompt": "For f(x)=x³ on [1,3], find the value c guaranteed by the mean value theorem.",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 2"
      },
      {
        "value": "B",
        "label": "B. √(13/3)"
      },
      {
        "value": "C",
        "label": "C. √13"
      },
      {
        "value": "D",
        "label": "D. 13/3"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Equate derivative and secant slope.",
    "setup": "Compute [f(3)−f(1)]/(3−1), then solve 3c² equal to that value.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nThe secant slope is (27−1)/(3−1)=13. Since f′(c)=3c², the theorem requires 3c²=13. The admissible solution is c=√(13/3), which lies between 1 and 3; the negative root is outside the interval.\n\nWhy the other choices fail:\nC: The derivative has a coefficient of 3.\nD: Solving c²=13/3 requires a square root.\nA: The midpoint need not have slope equal to the secant slope.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "The derivative has a coefficient of 3."
      },
      {
        "option": "D",
        "explanation": "Solving c²=13/3 requires a square root."
      },
      {
        "option": "A",
        "explanation": "The midpoint need not have slope equal to the secant slope."
      }
    ],
    "diagram": "",
    "hub": "approximation",
    "subtopic": "Mean value theorem inside the interval",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "approximation / Mean value theorem inside the interval",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Mean value theorem inside the interval"
  },
  {
    "id": "v4-15",
    "subject": "Calculus I",
    "topic": "FTC with a moving upper limit",
    "title": "FTC with a moving upper limit",
    "prompt": "Let F(x)=∫ from 1 to x² of ln(t) dt, with x>0. Find F′(x).",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 2x ln x"
      },
      {
        "value": "B",
        "label": "B. ln(x)"
      },
      {
        "value": "C",
        "label": "C. 2x ln(x²)"
      },
      {
        "value": "D",
        "label": "D. ln(x²)"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "The upper limit is itself a function.",
    "setup": "Use d/dx ∫₁ᵍ⁽ˣ⁾ f(t)dt=f(g(x))g′(x).",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nThe fundamental theorem first evaluates the integrand at the upper limit, giving ln(x²). The chain rule multiplies by the derivative of x², which is 2x. Thus F′(x)=2x ln(x²)=4x ln x for x>0.\n\nWhy the other choices fail:\nD: The upper limit is not x, so its derivative must be included.\nA: For x>0, ln(x²)=2 ln x; omitting that factor halves the result.\nB: This ignores both the upper-limit substitution and chain-rule factor.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "The upper limit is not x, so its derivative must be included."
      },
      {
        "option": "A",
        "explanation": "For x>0, ln(x²)=2 ln x; omitting that factor halves the result."
      },
      {
        "option": "B",
        "explanation": "This ignores both the upper-limit substitution and chain-rule factor."
      }
    ],
    "diagram": "",
    "hub": "integration",
    "subtopic": "FTC with a moving upper limit",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "integration / FTC with a moving upper limit",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "FTC with a moving upper limit"
  },
  {
    "id": "v4-16",
    "subject": "Calculus I",
    "topic": "Substitution and definite bounds",
    "title": "Substitution and definite bounds",
    "prompt": "Evaluate ∫ from 0 to 1 of 2x/(1+x²) dx.",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 2 ln 2"
      },
      {
        "value": "B",
        "label": "B. 1/2"
      },
      {
        "value": "C",
        "label": "C. ln 1"
      },
      {
        "value": "D",
        "label": "D. ln 2"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Use the denominator as your substitution.",
    "setup": "Transform both bounds when setting u=1+x².",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nSet u=1+x², so du=2x dx. The bounds become u=1 and u=2. Integrating 1/u over these bounds gives ln2−ln1=ln2. The substitution absorbs the entire factor 2x.\n\nWhy the other choices fail:\nA: Keeping an extra factor 2 after replacing 2x dx double-counts it.\nB: The antiderivative of 1/u is ln u, not a power-rule expression.\nC: The upper transformed bound is 2, not 1.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "Keeping an extra factor 2 after replacing 2x dx double-counts it."
      },
      {
        "option": "B",
        "explanation": "The antiderivative of 1/u is ln u, not a power-rule expression."
      },
      {
        "option": "C",
        "explanation": "The upper transformed bound is 2, not 1."
      }
    ],
    "diagram": "",
    "hub": "integration",
    "subtopic": "Substitution and definite bounds",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "integration / Substitution and definite bounds",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Substitution and definite bounds"
  },
  {
    "id": "v4-17",
    "subject": "Calculus I",
    "topic": "Distance is not displacement",
    "title": "Distance is not displacement",
    "prompt": "A particle has v(t)=t−2 m/s for 0≤t≤5 s. What pair gives (displacement, total distance)?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. (2.5 m, 6.5 m)"
      },
      {
        "value": "B",
        "label": "B. (6.5 m, 2.5 m)"
      },
      {
        "value": "C",
        "label": "C. (2.5 m, 2.5 m)"
      },
      {
        "value": "D",
        "label": "D. (12.5 m, 12.5 m)"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Split the distance integral where velocity changes sign.",
    "setup": "Compute ∫v dt for displacement and ∫|v|dt for distance.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nThe signed integral ∫₀⁵(t−2)dt is 12.5−10=2.5 m. Velocity changes sign at t=2. The negative triangular area has magnitude 2 m and the positive area 4.5 m, so total distance is 6.5 m.\n\nWhy the other choices fail:\nB: Signed and absolute areas have been swapped.\nC: Distance must include the magnitude of the backward motion.\nD: Integrating t alone omits the −2 m/s term.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "Signed and absolute areas have been swapped."
      },
      {
        "option": "C",
        "explanation": "Distance must include the magnitude of the backward motion."
      },
      {
        "option": "D",
        "explanation": "Integrating t alone omits the −2 m/s term."
      }
    ],
    "diagram": "",
    "hub": "integral-apps",
    "subtopic": "Distance is not displacement",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "integral-apps / Distance is not displacement",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Distance is not displacement"
  },
  {
    "id": "v4-18",
    "subject": "Calculus I",
    "topic": "A washer volume with two radii",
    "title": "A washer volume with two radii",
    "prompt": "Rotate the region between y=x and y=x², 0≤x≤1, about the x-axis. What is its volume?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. π/30"
      },
      {
        "value": "B",
        "label": "B. 2π/15"
      },
      {
        "value": "C",
        "label": "C. π/3"
      },
      {
        "value": "D",
        "label": "D. π/5"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Identify the outer and inner radius separately.",
    "setup": "Use V=π∫(R²−r²)dx.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nOn this interval, x≥x², so the outer radius is x and inner radius is x². The washer integral is π∫₀¹(x²−x⁴)dx. Evaluation gives π(1/3−1/5)=2π/15, with the cavity correctly subtracted.\n\nWhy the other choices fail:\nC: This is the volume of the outer cone without subtracting the inner solid.\nD: This is the inner solid alone.\nA: Squaring the radius difference gives (x−x²)², not the difference of squared radii.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "This is the volume of the outer cone without subtracting the inner solid."
      },
      {
        "option": "D",
        "explanation": "This is the inner solid alone."
      },
      {
        "option": "A",
        "explanation": "Squaring the radius difference gives (x−x²)², not the difference of squared radii."
      }
    ],
    "diagram": "",
    "hub": "integral-apps",
    "subtopic": "A washer volume with two radii",
    "difficulty": "Integration",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Challenge · original practice",
    "topicScope": "integral-apps / A washer volume with two radii",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A washer volume with two radii"
  },
  {
    "id": "v4-19",
    "subject": "Calculus I",
    "topic": "A trigonometric scale factor",
    "title": "A trigonometric scale factor",
    "prompt": "Evaluate lim(x→0) sin(5x)/tan(2x), with angles in radians.",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 1"
      },
      {
        "value": "B",
        "label": "B. 0"
      },
      {
        "value": "C",
        "label": "C. 5/2"
      },
      {
        "value": "D",
        "label": "D. 2/5"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Normalize each trigonometric function by its argument.",
    "setup": "Insert factors 5x and 2x to use the standard small-angle limits.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nRewrite the expression as [sin(5x)/(5x)]·[2x/tan(2x)]·(5/2). Both bracketed factors tend to one in radians. Therefore the limit is 5/2; the unequal angle scale factors survive the limit.\n\nWhy the other choices fail:\nD: The numerator and denominator scale factors have been inverted.\nA: The standard trigonometric limits do not eliminate unequal constants.\nB: Both quantities tending to zero does not make their quotient tend to zero.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "The numerator and denominator scale factors have been inverted."
      },
      {
        "option": "A",
        "explanation": "The standard trigonometric limits do not eliminate unequal constants."
      },
      {
        "option": "B",
        "explanation": "Both quantities tending to zero does not make their quotient tend to zero."
      }
    ],
    "diagram": "",
    "hub": "limits",
    "subtopic": "A trigonometric scale factor",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "limits / A trigonometric scale factor",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A trigonometric scale factor"
  },
  {
    "id": "v4-20",
    "subject": "Calculus I",
    "topic": "Maximize a fenced rectangle",
    "title": "Maximize a fenced rectangle",
    "prompt": "A rectangle against a straight wall needs fencing on only three sides. With 60 m of fence, what width perpendicular to the wall maximizes area?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 20 m"
      },
      {
        "value": "B",
        "label": "B. 30 m"
      },
      {
        "value": "C",
        "label": "C. 10 m"
      },
      {
        "value": "D",
        "label": "D. 15 m"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Eliminate the parallel length using the fence constraint.",
    "setup": "Maximize A(w)=w(60−2w) on 0≤w≤30.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nLet width be w and the parallel fenced length be L. The constraint is 2w+L=60, so A=w(60−2w). Its derivative is 60−4w, giving w=15 m, with negative second derivative −4. The corresponding length is 30 m and endpoints give zero area.\n\nWhy the other choices fail:\nA: Equal allocation to three sides does not maximize their rectangular area.\nB: At w=30 the length is zero and no positive area remains.\nC: This does not satisfy the stationary condition for area.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "Equal allocation to three sides does not maximize their rectangular area."
      },
      {
        "option": "B",
        "explanation": "At w=30 the length is zero and no positive area remains."
      },
      {
        "option": "C",
        "explanation": "This does not satisfy the stationary condition for area."
      }
    ],
    "diagram": "",
    "hub": "critical",
    "subtopic": "Maximize a fenced rectangle",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/calculus-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "critical / Maximize a fenced rectangle",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Maximize a fenced rectangle"
  },
  {
    "id": "v4-21",
    "subject": "Physics I",
    "topic": "Two-stage motion and signed velocity",
    "title": "Two-stage motion and signed velocity",
    "prompt": "A cart starts at rest, accelerates at +2 m/s² for 3 s, then at −3 m/s² for 4 s. What are its final velocity and total displacement?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. −6 m/s; 9 m"
      },
      {
        "value": "B",
        "label": "B. −6 m/s; 21 m"
      },
      {
        "value": "C",
        "label": "C. 6 m/s; 9 m"
      },
      {
        "value": "D",
        "label": "D. −12 m/s; −15 m"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Carry the first-stage final velocity into the second stage.",
    "setup": "Use v=v₀+at and Δx=v₀t+at²/2 separately for each interval.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nAfter stage one, v=6 m/s and displacement is 9 m. Stage two gives v=6−3(4)=−6 m/s and displacement 6(4)−(3/2)(16)=0. Adding signed displacements gives 9 m; the cart reverses direction partway through the second stage.\n\nWhy the other choices fail:\nB: This adds distance traveled during reversal rather than signed displacement.\nC: The negative acceleration eventually reverses the velocity.\nD: The second stage starts at +6 m/s, not from rest.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "This adds distance traveled during reversal rather than signed displacement."
      },
      {
        "option": "C",
        "explanation": "The negative acceleration eventually reverses the velocity."
      },
      {
        "option": "D",
        "explanation": "The second stage starts at +6 m/s, not from rest."
      }
    ],
    "diagram": "",
    "hub": "kinematics",
    "subtopic": "Two-stage motion and signed velocity",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "kinematics / Two-stage motion and signed velocity",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Two-stage motion and signed velocity"
  },
  {
    "id": "v4-22",
    "subject": "Physics I",
    "topic": "Component addition with quadrant check",
    "title": "Component addition with quadrant check",
    "prompt": "A displacement is 6 m east followed by 8 m north and 10 m west. What is the resultant magnitude and direction measured counterclockwise from east?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. √20 m; 63.4°"
      },
      {
        "value": "B",
        "label": "B. √80 m; 116.6°"
      },
      {
        "value": "C",
        "label": "C. √80 m; −63.4°"
      },
      {
        "value": "D",
        "label": "D. 24 m; 116.6°"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Sketch the net signed components.",
    "setup": "Use √(x²+y²) and a quadrant-aware direction.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nThe net components are x=6−10=−4 m and y=8 m. The magnitude is √(16+64)=√80 m. The vector lies in quadrant II, so the direction is 180°−arctan(8/4)=116.6°, not the principal arctangent in quadrant IV.\n\nWhy the other choices fail:\nC: A plain arctangent ratio without a quadrant correction points in the opposite direction.\nD: The path length is 24 m, not the resultant displacement magnitude.\nA: The components are −4 and 8; neither the magnitude nor quadrant matches.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "A plain arctangent ratio without a quadrant correction points in the opposite direction."
      },
      {
        "option": "D",
        "explanation": "The path length is 24 m, not the resultant displacement magnitude."
      },
      {
        "option": "A",
        "explanation": "The components are −4 and 8; neither the magnitude nor quadrant matches."
      }
    ],
    "diagram": "",
    "hub": "vectors",
    "subtopic": "Component addition with quadrant check",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "vectors / Component addition with quadrant check",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Component addition with quadrant check"
  },
  {
    "id": "v4-23",
    "subject": "Physics I",
    "topic": "Friction must be tested before motion",
    "title": "Friction must be tested before motion",
    "prompt": "A 5 kg block rests on a level table with μs=0.5 and μk=0.3. A horizontal 20 N force is applied. With g=10 m/s², what are friction and acceleration?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 15 N opposing the pull; 1 m/s²"
      },
      {
        "value": "B",
        "label": "B. 0 N; 4 m/s²"
      },
      {
        "value": "C",
        "label": "C. 20 N opposing the pull; 0"
      },
      {
        "value": "D",
        "label": "D. 25 N opposing the pull; −1 m/s²"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Compare the applied force with the maximum static friction.",
    "setup": "Compute N=mg and μsN before deciding whether the block slides.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nThe normal force is 50 N and maximum static friction is 25 N. Since the applied 20 N is below this threshold, the block remains at rest and static friction adjusts to 20 N. There is no acceleration and kinetic friction is not applicable.\n\nWhy the other choices fail:\nD: Static friction is not always at its maximum value.\nA: Kinetic friction applies only once sliding occurs.\nB: The frictional force balances this subthreshold pull.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "Static friction is not always at its maximum value."
      },
      {
        "option": "A",
        "explanation": "Kinetic friction applies only once sliding occurs."
      },
      {
        "option": "B",
        "explanation": "The frictional force balances this subthreshold pull."
      }
    ],
    "diagram": "",
    "hub": "forces",
    "subtopic": "Friction must be tested before motion",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "forces / Friction must be tested before motion",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Friction must be tested before motion"
  },
  {
    "id": "v4-24",
    "subject": "Physics I",
    "topic": "A two-mass ideal pulley",
    "title": "A two-mass ideal pulley",
    "prompt": "Masses 2 kg and 3 kg hang from an ideal massless string over a frictionless massless pulley. With g=10 m/s², find acceleration magnitude and tension.",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 2 m/s²; 20 N"
      },
      {
        "value": "B",
        "label": "B. 10 m/s²; 0 N"
      },
      {
        "value": "C",
        "label": "C. 5 m/s²; 15 N"
      },
      {
        "value": "D",
        "label": "D. 2 m/s²; 24 N"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Use separate free-body equations and one shared acceleration.",
    "setup": "Add (m₂g−T)=m₂a and (T−m₁g)=m₁a.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nFor the 3 kg mass downward, 30−T=3a. For the 2 kg mass upward, T−20=2a. Adding gives 10=5a, hence a=2 m/s². Substitution gives T=24 N, between the two weights as expected.\n\nWhy the other choices fail:\nA: The lighter mass accelerates upward, so tension exceeds its weight.\nB: The masses are coupled; neither is in free fall.\nC: The net driving force is divided by the total moving mass.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "The lighter mass accelerates upward, so tension exceeds its weight."
      },
      {
        "option": "B",
        "explanation": "The masses are coupled; neither is in free fall."
      },
      {
        "option": "C",
        "explanation": "The net driving force is divided by the total moving mass."
      }
    ],
    "diagram": "",
    "hub": "forces",
    "subtopic": "A two-mass ideal pulley",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "forces / A two-mass ideal pulley",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A two-mass ideal pulley"
  },
  {
    "id": "v4-25",
    "subject": "Physics I",
    "topic": "Contact at the top of a loop",
    "title": "Contact at the top of a loop",
    "prompt": "A small cart travels inside a vertical circular loop of radius 2 m. Neglect friction and take g=10 m/s². What minimum speed at the top maintains contact?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. √20 m/s"
      },
      {
        "value": "B",
        "label": "B. √40 m/s"
      },
      {
        "value": "C",
        "label": "C. 20 m/s"
      },
      {
        "value": "D",
        "label": "D. 0 m/s"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Set the normal force to zero only at the contact threshold.",
    "setup": "Resolve forces inward at the top: mg+N=mv²/r.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nAt the top both gravity and the inward normal force point toward the center. The radial equation is mg+N=mv²/r. At the contact threshold N=0, so v²=gr=20 m²/s² and v=√20 m/s. A lower speed would require a negative normal force.\n\nWhy the other choices fail:\nB: The factor two does not arise in the top-of-loop radial force balance.\nC: gr has units of speed squared; take its square root.\nD: Gravity alone still requires sufficient speed to follow the circular path.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "The factor two does not arise in the top-of-loop radial force balance."
      },
      {
        "option": "C",
        "explanation": "gr has units of speed squared; take its square root."
      },
      {
        "option": "D",
        "explanation": "Gravity alone still requires sufficient speed to follow the circular path."
      }
    ],
    "diagram": "",
    "hub": "circular",
    "subtopic": "Contact at the top of a loop",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "circular / Contact at the top of a loop",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Contact at the top of a loop"
  },
  {
    "id": "v4-26",
    "subject": "Physics I",
    "topic": "Spring launch against friction",
    "title": "Spring launch against friction",
    "prompt": "A 2 kg block is launched from a spring of k=200 N/m compressed 0.30 m along a level surface. Kinetic friction is 4 N throughout. What is its speed after traveling 1.0 m from release, when no longer touching the spring?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 5 m/s"
      },
      {
        "value": "B",
        "label": "B. √5 m/s"
      },
      {
        "value": "C",
        "label": "C. 3 m/s"
      },
      {
        "value": "D",
        "label": "D. √13 m/s"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Include friction over the full stated travel distance.",
    "setup": "Set kx₀²/2−fd=mv²/2.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nInitial spring energy is (1/2)(200)(0.30)²=9 J. Friction removes 4 J over the entire 1 m. Final kinetic energy is 5 J, and (1/2)(2)v²=5 yields v=√5 m/s. The spring has returned to its natural length by this point.\n\nWhy the other choices fail:\nC: This ignores energy dissipated by friction.\nD: Friction removes mechanical energy rather than adding it.\nA: The kinetic-energy equation determines v²=5, not v=5.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "This ignores energy dissipated by friction."
      },
      {
        "option": "D",
        "explanation": "Friction removes mechanical energy rather than adding it."
      },
      {
        "option": "A",
        "explanation": "The kinetic-energy equation determines v²=5, not v=5."
      }
    ],
    "diagram": "",
    "hub": "energy",
    "subtopic": "Spring launch against friction",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "energy / Spring launch against friction",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Spring launch against friction"
  },
  {
    "id": "v4-27",
    "subject": "Physics I",
    "topic": "A variable-force work integral",
    "title": "A variable-force work integral",
    "prompt": "A 2 kg particle starts at x=0 with velocity +2 m/s. A net force F(x)=6x N acts along +x, where x is in meters. What is its speed at x=2 m?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 6 m/s"
      },
      {
        "value": "B",
        "label": "B. 12 m/s"
      },
      {
        "value": "C",
        "label": "C. 4 m/s"
      },
      {
        "value": "D",
        "label": "D. √12 m/s"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Find the area under the force-position graph.",
    "setup": "Compute W=∫F dx, then W=mv²/2.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nThe net work is ∫₀²6x dx=12 J. Initial kinetic energy is (1/2)(2)(2²)=4 J, so final kinetic energy is 16 J. Because (1/2)mv²=v² for m=2 kg, vf=4 m/s. The positive initial velocity carries the particle away from x=0, and the force then accelerates it further.\n\nWhy the other choices fail:\nA: Treating the final force as constant overestimates the work.\nB: Position-dependent force does not justify a constant-acceleration calculation.\nD: This ignores the initial kinetic energy.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "Treating the final force as constant overestimates the work."
      },
      {
        "option": "B",
        "explanation": "Position-dependent force does not justify a constant-acceleration calculation."
      },
      {
        "option": "D",
        "explanation": "This ignores the initial kinetic energy."
      }
    ],
    "diagram": "",
    "hub": "energy",
    "subtopic": "A variable-force work integral",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "energy / A variable-force work integral",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A variable-force work integral"
  },
  {
    "id": "v4-28",
    "subject": "Physics I",
    "topic": "A sticking collision and energy loss",
    "title": "A sticking collision and energy loss",
    "prompt": "A 2 kg cart moving at 6 m/s hits and sticks to a stationary 4 kg cart on a frictionless track. Find the common speed and kinetic energy lost.",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 2 m/s; 0 J"
      },
      {
        "value": "B",
        "label": "B. 3 m/s; 9 J"
      },
      {
        "value": "C",
        "label": "C. 6 m/s; 72 J"
      },
      {
        "value": "D",
        "label": "D. 2 m/s; 24 J"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Conserve momentum first, then compare kinetic energies.",
    "setup": "Use m₁v₁=(m₁+m₂)v and calculate both energies.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nMomentum conservation gives 2(6)=(2+4)v, so v=2 m/s. Initial kinetic energy is 36 J and final kinetic energy is (1/2)(6)(4)=12 J. Therefore 24 J converts to internal energy; momentum conservation does not imply kinetic-energy conservation.\n\nWhy the other choices fail:\nA: A perfectly inelastic collision does not conserve kinetic energy.\nB: The final momentum must be 12 kg·m/s, not 18.\nC: The added stationary mass changes the common velocity.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "A perfectly inelastic collision does not conserve kinetic energy."
      },
      {
        "option": "B",
        "explanation": "The final momentum must be 12 kg·m/s, not 18."
      },
      {
        "option": "C",
        "explanation": "The added stationary mass changes the common velocity."
      }
    ],
    "diagram": "",
    "hub": "momentum",
    "subtopic": "A sticking collision and energy loss",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "momentum / A sticking collision and energy loss",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A sticking collision and energy loss"
  },
  {
    "id": "v4-29",
    "subject": "Physics I",
    "topic": "Impulse with a force reversal",
    "title": "Impulse with a force reversal",
    "prompt": "A 1 kg object initially moves at +2 m/s. Net force is +4 N for 2 s, then −3 N for 1 s. What is the final velocity?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. +7 m/s"
      },
      {
        "value": "B",
        "label": "B. +5 m/s"
      },
      {
        "value": "C",
        "label": "C. +13 m/s"
      },
      {
        "value": "D",
        "label": "D. −3 m/s"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Add signed impulses to the initial momentum.",
    "setup": "Use mvf=mvi+ΣFΔt.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nNet impulse is 4(2)−3(1)=5 N·s. The initial momentum is 2 kg·m/s, so final momentum is 7 kg·m/s. Dividing by 1 kg gives +7 m/s. The negative final force reduces velocity but does not reverse it during that one second.\n\nWhy the other choices fail:\nB: Impulse gives change in momentum, not final momentum.\nC: The second force contributes a negative impulse.\nD: Force direction alone does not determine velocity direction.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "Impulse gives change in momentum, not final momentum."
      },
      {
        "option": "C",
        "explanation": "The second force contributes a negative impulse."
      },
      {
        "option": "D",
        "explanation": "Force direction alone does not determine velocity direction."
      }
    ],
    "diagram": "",
    "hub": "momentum",
    "subtopic": "Impulse with a force reversal",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "momentum / Impulse with a force reversal",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Impulse with a force reversal"
  },
  {
    "id": "v4-30",
    "subject": "Physics I",
    "topic": "Rolling solid cylinder down a ramp",
    "title": "Rolling solid cylinder down a ramp",
    "prompt": "A solid cylinder rolls without slipping from rest through a vertical drop of 3 m. With I=MR²/2 and g=10 m/s², find its center-of-mass speed.",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. √20 m/s"
      },
      {
        "value": "B",
        "label": "B. √40 m/s"
      },
      {
        "value": "C",
        "label": "C. √60 m/s"
      },
      {
        "value": "D",
        "label": "D. √30 m/s"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Include translation and rotation, then enforce rolling.",
    "setup": "Set Mgh=Mv²/2+(MR²/2)(v/R)²/2.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nConservation of energy gives Mgh=Mv²/2+Iω²/2. Using ω=v/R and I=MR²/2, the total kinetic energy is 3Mv²/4. Thus v²=4gh/3=40 m²/s². Static friction enables rolling but does no work at an ideal stationary contact.\n\nWhy the other choices fail:\nC: This ignores rotational kinetic energy.\nD: This corresponds to a hoop, not a solid cylinder.\nA: The translational and rotational energies are not equal for this inertia.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "This ignores rotational kinetic energy."
      },
      {
        "option": "D",
        "explanation": "This corresponds to a hoop, not a solid cylinder."
      },
      {
        "option": "A",
        "explanation": "The translational and rotational energies are not equal for this inertia."
      }
    ],
    "diagram": "",
    "hub": "rotation",
    "subtopic": "Rolling solid cylinder down a ramp",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "rotation / Rolling solid cylinder down a ramp",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Rolling solid cylinder down a ramp"
  },
  {
    "id": "v4-31",
    "subject": "Physics I",
    "topic": "Parallel-axis inertia of a rod",
    "title": "Parallel-axis inertia of a rod",
    "prompt": "A uniform rod has mass 3 kg and length 2 m. Its central perpendicular moment of inertia is ML²/12. What is its inertia about a perpendicular axis through one end?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 13 kg·m²"
      },
      {
        "value": "B",
        "label": "B. 3 kg·m²"
      },
      {
        "value": "C",
        "label": "C. 4 kg·m²"
      },
      {
        "value": "D",
        "label": "D. 1 kg·m²"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Measure the separation between the two axes.",
    "setup": "Use Iend=Icm+Md² with d=L/2.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nThe central inertia is 3(2²)/12=1 kg·m². The end axis is L/2=1 m from the center, so the parallel-axis term is M(L/2)²=3 kg·m². Adding gives 4 kg·m², also equal to ML²/3.\n\nWhy the other choices fail:\nD: This is the central inertia before shifting the axis.\nA: The shift distance is half the length, not the full length.\nB: This is only the added parallel-axis term.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "This is the central inertia before shifting the axis."
      },
      {
        "option": "A",
        "explanation": "The shift distance is half the length, not the full length."
      },
      {
        "option": "B",
        "explanation": "This is only the added parallel-axis term."
      }
    ],
    "diagram": "",
    "hub": "rotation",
    "subtopic": "Parallel-axis inertia of a rod",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "rotation / Parallel-axis inertia of a rod",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Parallel-axis inertia of a rod"
  },
  {
    "id": "v4-32",
    "subject": "Physics I",
    "topic": "Angle matters in torque",
    "title": "Angle matters in torque",
    "prompt": "A 10 N force acts at the end of a 0.50 m wrench. The force makes a 30° angle with the wrench radius vector. What is the torque magnitude?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 5 N·m"
      },
      {
        "value": "B",
        "label": "B. 4.33 N·m"
      },
      {
        "value": "C",
        "label": "C. 20 N·m"
      },
      {
        "value": "D",
        "label": "D. 2.5 N·m"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Use the component perpendicular to the wrench.",
    "setup": "Evaluate τ=rF sinθ with θ=30°.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nTorque magnitude is rF sinθ, where θ is the angle between the radius vector and force. Substitution gives (0.50)(10)sin30°=2.5 N·m. Only the perpendicular force component contributes to rotation about the pivot.\n\nWhy the other choices fail:\nA: This assumes a perpendicular force instead of a 30° angle.\nB: Cosine extracts the parallel component for the stated angle.\nC: Torque multiplies by the lever arm; it does not divide by it.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "This assumes a perpendicular force instead of a 30° angle."
      },
      {
        "option": "B",
        "explanation": "Cosine extracts the parallel component for the stated angle."
      },
      {
        "option": "C",
        "explanation": "Torque multiplies by the lever arm; it does not divide by it."
      }
    ],
    "diagram": "",
    "hub": "torque",
    "subtopic": "Angle matters in torque",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "torque / Angle matters in torque",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Angle matters in torque"
  },
  {
    "id": "v4-33",
    "subject": "Physics I",
    "topic": "A beam in rotational equilibrium",
    "title": "A beam in rotational equilibrium",
    "prompt": "A massless horizontal 4 m beam is hinged at its left end. A 100 N load hangs 3 m from the hinge. A vertical cable supports the right end. Find the cable tension and upward hinge force.",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 75 N; 25 N"
      },
      {
        "value": "B",
        "label": "B. 100 N; 0 N"
      },
      {
        "value": "C",
        "label": "C. 25 N; 75 N"
      },
      {
        "value": "D",
        "label": "D. 300 N; −200 N"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Take torques about the hinge first.",
    "setup": "Use 4T=3W, then Hy+T=W.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nTaking moments about the hinge eliminates its force: 4T−3(100)=0, so T=75 N. Vertical force balance then gives Hy+75−100=0, hence Hy=25 N upward. Both force and torque equilibrium must hold.\n\nWhy the other choices fail:\nB: Balancing forces alone misses the unequal lever arms.\nC: This reverses the support shares set by the lever arms.\nD: The load moment is 300 N·m, which must be divided by the 4 m cable lever arm.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "Balancing forces alone misses the unequal lever arms."
      },
      {
        "option": "C",
        "explanation": "This reverses the support shares set by the lever arms."
      },
      {
        "option": "D",
        "explanation": "The load moment is 300 N·m, which must be divided by the 4 m cable lever arm."
      }
    ],
    "diagram": "",
    "hub": "torque",
    "subtopic": "A beam in rotational equilibrium",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "torque / A beam in rotational equilibrium",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A beam in rotational equilibrium"
  },
  {
    "id": "v4-34",
    "subject": "Physics I",
    "topic": "Pulling masses inward changes energy",
    "title": "Pulling masses inward changes energy",
    "prompt": "A rotating system with no external torque reduces its moment of inertia from 6 to 2 kg·m². Initially ω=3 rad/s. What are final ω and the ratio Kf/Ki?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 3 rad/s; 1/3"
      },
      {
        "value": "B",
        "label": "B. 9 rad/s; 3"
      },
      {
        "value": "C",
        "label": "C. 1 rad/s; 1/3"
      },
      {
        "value": "D",
        "label": "D. 9 rad/s; 1"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Conserve angular momentum, not kinetic energy.",
    "setup": "Use Iiωi=Ifωf and K=L²/(2I).",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nAngular momentum Iω is conserved, so 6(3)=2ωf and ωf=9 rad/s. Since K=L²/(2I) for fixed L, reducing inertia by a factor of three triples rotational energy. Internal work supplies the extra kinetic energy.\n\nWhy the other choices fail:\nC: Conservation of Iω makes angular speed increase as inertia falls.\nD: Angular momentum conservation does not require rotational kinetic energy conservation.\nA: Constant angular speed would violate angular momentum conservation here.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "Conservation of Iω makes angular speed increase as inertia falls."
      },
      {
        "option": "D",
        "explanation": "Angular momentum conservation does not require rotational kinetic energy conservation."
      },
      {
        "option": "A",
        "explanation": "Constant angular speed would violate angular momentum conservation here."
      }
    ],
    "diagram": "",
    "hub": "angular-momentum",
    "subtopic": "Pulling masses inward changes energy",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "angular-momentum / Pulling masses inward changes energy",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Pulling masses inward changes energy"
  },
  {
    "id": "v4-35",
    "subject": "Physics I",
    "topic": "Changing a circular orbit radius",
    "title": "Changing a circular orbit radius",
    "prompt": "A satellite moves from a circular orbit of radius r to a circular orbit of radius 4r around the same planet. What are vf/vi and Tf/Ti?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 1/2; 4"
      },
      {
        "value": "B",
        "label": "B. 2; 1/8"
      },
      {
        "value": "C",
        "label": "C. 1/2; 8"
      },
      {
        "value": "D",
        "label": "D. 1/4; 4"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Combine gravitational centripetal balance with period.",
    "setup": "Use v∝r^(−1/2) and T∝r^(3/2).",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nCircular-orbit speed is √(GM/r), so quadrupling radius halves speed. Period is circumference divided by speed: 2πr/v. The new circumference is four times larger and speed half as large, giving an eightfold period increase.\n\nWhy the other choices fail:\nD: Speed scales with inverse square root of radius, not inverse radius.\nA: The larger circumference and reduced speed both affect the period.\nB: Higher circular orbits are slower and have longer periods.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "Speed scales with inverse square root of radius, not inverse radius."
      },
      {
        "option": "A",
        "explanation": "The larger circumference and reduced speed both affect the period."
      },
      {
        "option": "B",
        "explanation": "Higher circular orbits are slower and have longer periods."
      }
    ],
    "diagram": "",
    "hub": "gravitation",
    "subtopic": "Changing a circular orbit radius",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "gravitation / Changing a circular orbit radius",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Changing a circular orbit radius"
  },
  {
    "id": "v4-36",
    "subject": "Physics I",
    "topic": "Energy partition in a spring oscillator",
    "title": "Energy partition in a spring oscillator",
    "prompt": "An ideal mass-spring oscillator has amplitude A. At x=A/2, what fraction of total mechanical energy is kinetic, and what is |v|/vmax?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 1/2; 1/2"
      },
      {
        "value": "B",
        "label": "B. 1/4; 1/2"
      },
      {
        "value": "C",
        "label": "C. 3/4; 3/4"
      },
      {
        "value": "D",
        "label": "D. 3/4; √3/2"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Compute potential energy as a fraction of total energy first.",
    "setup": "Use K/E=1−x²/A² and v/vmax=√(K/E).",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nTotal energy is kA²/2. At x=A/2 the potential energy kx²/2 is one quarter of the total, leaving three quarters as kinetic. Since kinetic energy scales as v², the speed ratio is √(3/4)=√3/2.\n\nWhy the other choices fail:\nA: Spring energy depends on displacement squared rather than displacement.\nB: One quarter is the potential-energy fraction, not the kinetic fraction.\nC: Speed is proportional to the square root of kinetic energy.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "Spring energy depends on displacement squared rather than displacement."
      },
      {
        "option": "B",
        "explanation": "One quarter is the potential-energy fraction, not the kinetic fraction."
      },
      {
        "option": "C",
        "explanation": "Speed is proportional to the square root of kinetic energy."
      }
    ],
    "diagram": "",
    "hub": "oscillations",
    "subtopic": "Energy partition in a spring oscillator",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "oscillations / Energy partition in a spring oscillator",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Energy partition in a spring oscillator"
  },
  {
    "id": "v4-37",
    "subject": "Physics I",
    "topic": "Standing-wave harmonics on a string",
    "title": "Standing-wave harmonics on a string",
    "prompt": "A string fixed at both ends is 1.2 m long and carries waves at 120 m/s. Find the frequency and wavelength of its third harmonic.",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 150 Hz; 0.80 m"
      },
      {
        "value": "B",
        "label": "B. 300 Hz; 0.40 m"
      },
      {
        "value": "C",
        "label": "C. 50 Hz; 2.4 m"
      },
      {
        "value": "D",
        "label": "D. 100 Hz; 1.2 m"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Count half-wavelengths between fixed ends.",
    "setup": "Use L=nλ/2 and f=v/λ.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nFixed ends require n half-wavelengths in the string length, so λn=2L/n. With n=3, λ=2.4/3=0.80 m. The frequency is v/λ=120/0.80=150 Hz, three times the 50 Hz fundamental.\n\nWhy the other choices fail:\nB: This fits six half-wavelengths, corresponding to the sixth harmonic.\nC: These are the fundamental values, not third-harmonic values.\nD: These values describe the second harmonic.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "This fits six half-wavelengths, corresponding to the sixth harmonic."
      },
      {
        "option": "C",
        "explanation": "These are the fundamental values, not third-harmonic values."
      },
      {
        "option": "D",
        "explanation": "These values describe the second harmonic."
      }
    ],
    "diagram": "",
    "hub": "waves",
    "subtopic": "Standing-wave harmonics on a string",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "waves / Standing-wave harmonics on a string",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Standing-wave harmonics on a string"
  },
  {
    "id": "v4-38",
    "subject": "Physics I",
    "topic": "Continuity and Bernoulli together",
    "title": "Continuity and Bernoulli together",
    "prompt": "Water of density 1000 kg/m³ flows horizontally through an ideal pipe. Area decreases from 4 cm² to 2 cm²; speed upstream is 2 m/s. What is P1−P2?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 8000 Pa"
      },
      {
        "value": "B",
        "label": "B. 6000 Pa"
      },
      {
        "value": "C",
        "label": "C. 2000 Pa"
      },
      {
        "value": "D",
        "label": "D. −6000 Pa"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Use continuity to find the second speed before applying energy balance.",
    "setup": "Set v2=(A1/A2)v1, then ΔP=ρ(v2²−v1²)/2.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nContinuity gives A1v1=A2v2, so v2=4 m/s. At equal height, Bernoulli gives P1−P2=(ρ/2)(v2²−v1²). This is 500(16−4)=6000 Pa; the narrower faster section has lower pressure.\n\nWhy the other choices fail:\nC: Bernoulli uses squared speeds, not just their difference.\nD: The faster section has lower pressure under the stated ideal assumptions.\nA: Subtract the upstream kinetic term rather than using the downstream term alone.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "Bernoulli uses squared speeds, not just their difference."
      },
      {
        "option": "D",
        "explanation": "The faster section has lower pressure under the stated ideal assumptions."
      },
      {
        "option": "A",
        "explanation": "Subtract the upstream kinetic term rather than using the downstream term alone."
      }
    ],
    "diagram": "",
    "hub": "fluids",
    "subtopic": "Continuity and Bernoulli together",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "fluids / Continuity and Bernoulli together",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Continuity and Bernoulli together"
  },
  {
    "id": "v4-39",
    "subject": "Physics I",
    "topic": "Dimensions expose a flawed pendulum formula",
    "title": "Dimensions expose a flawed pendulum formula",
    "prompt": "A proposed period law uses only pendulum length L and gravitational acceleration g: T=C L^a g^b, where C is dimensionless. Which exponents are dimensionally possible?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. a=−1/2, b=1/2"
      },
      {
        "value": "B",
        "label": "B. a=0, b=−1/2"
      },
      {
        "value": "C",
        "label": "C. a=1/2, b=−1/2"
      },
      {
        "value": "D",
        "label": "D. a=1, b=−1"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Match time and length exponents separately.",
    "setup": "Use [g]=length/time² and require [T]=time.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nThe dimensions are length^(a+b) time^(−2b). Matching a period requires a+b=0 and −2b=1. Therefore b=−1/2 and a=1/2. Dimensional analysis determines the scaling but cannot determine C or justify small-angle assumptions.\n\nWhy the other choices fail:\nD: These exponents produce time squared rather than time.\nA: This gives inverse time, the dimensions of frequency.\nB: The residual length dimension must cancel as well.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "These exponents produce time squared rather than time."
      },
      {
        "option": "A",
        "explanation": "This gives inverse time, the dimensions of frequency."
      },
      {
        "option": "B",
        "explanation": "The residual length dimension must cancel as well."
      }
    ],
    "diagram": "",
    "hub": "measurement",
    "subtopic": "Dimensions expose a flawed pendulum formula",
    "difficulty": "Core",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "measurement / Dimensions expose a flawed pendulum formula",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Dimensions expose a flawed pendulum formula"
  },
  {
    "id": "v4-40",
    "subject": "Physics I",
    "topic": "Minimum release height for a loop",
    "title": "Minimum release height for a loop",
    "prompt": "A frictionless point-mass cart starts from rest at height h above the bottom of a vertical loop of radius R. What minimum h keeps contact at the top?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 2R"
      },
      {
        "value": "B",
        "label": "B. 3R"
      },
      {
        "value": "C",
        "label": "C. R/2"
      },
      {
        "value": "D",
        "label": "D. 5R/2"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Combine the top contact condition with conservation of energy.",
    "setup": "Use vtop²=gR and h=2R+vtop²/(2g).",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nAt the top contact threshold, vtop²=gR. Energy from release to the top gives mgh=mg(2R)+mvtop²/2. Substitution yields h=2R+R/2=5R/2. Merely reaching the top with zero speed is insufficient for contact.\n\nWhy the other choices fail:\nA: This supplies only the top gravitational potential, leaving no necessary speed.\nB: The threshold kinetic contribution is mgR/2, not mgR.\nC: The height of the loop top above the bottom must also be included.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "This supplies only the top gravitational potential, leaving no necessary speed."
      },
      {
        "option": "B",
        "explanation": "The threshold kinetic contribution is mgR/2, not mgR."
      },
      {
        "option": "C",
        "explanation": "The height of the loop top above the bottom must also be included."
      }
    ],
    "diagram": "",
    "hub": "energy",
    "subtopic": "Minimum release height for a loop",
    "difficulty": "Integration",
    "type": "Multi-step",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/university-physics-volume-1. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Challenge · original practice",
    "topicScope": "energy / Minimum release height for a loop",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Minimum release height for a loop"
  },
  {
    "id": "v4-41",
    "subject": "Organic Chemistry I",
    "topic": "Unsaturation from a molecular formula",
    "title": "Unsaturation from a molecular formula",
    "prompt": "For a neutral closed-shell compound C5H8O2 with ordinary valences, what is its degree of unsaturation, and which feature set is compatible?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 2; one ring and one carbonyl"
      },
      {
        "value": "B",
        "label": "B. 1; one carbonyl only"
      },
      {
        "value": "C",
        "label": "C. 3; one ring and two carbonyls"
      },
      {
        "value": "D",
        "label": "D. 0; acyclic saturated structure"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Ignore oxygen when calculating hydrogen deficiency.",
    "setup": "Use DBE=(2C+2+N−H−X)/2 for ordinary neutral formulas.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nOxygen does not affect the hydrogen-deficiency count. DBE=(2C+2−H)/2=(10+2−8)/2=2. Each ring or double bond contributes one, so a ring plus one carbonyl is compatible; the formula alone does not prove that particular structure.\n\nWhy the other choices fail:\nB: Eight hydrogens are four fewer than the saturated acyclic reference, not two fewer.\nC: That feature set requires three degrees of unsaturation.\nD: An acyclic saturated oxygen-containing C5 compound would have twelve hydrogens.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "Eight hydrogens are four fewer than the saturated acyclic reference, not two fewer."
      },
      {
        "option": "C",
        "explanation": "That feature set requires three degrees of unsaturation."
      },
      {
        "option": "D",
        "explanation": "An acyclic saturated oxygen-containing C5 compound would have twelve hydrogens."
      }
    ],
    "diagram": "",
    "hub": "structure",
    "subtopic": "Unsaturation from a molecular formula",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "structure / Unsaturation from a molecular formula",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Unsaturation from a molecular formula"
  },
  {
    "id": "v4-42",
    "subject": "Organic Chemistry I",
    "topic": "Amide nitrogen geometry",
    "title": "Amide nitrogen geometry",
    "prompt": "Which describes the nitrogen in a simple planar amide such as acetamide, CH3CONH2?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. sp²; it is more basic than a comparable amine"
      },
      {
        "value": "B",
        "label": "B. Approximately sp²; its lone pair is delocalized into the carbonyl"
      },
      {
        "value": "C",
        "label": "C. sp³; free rotation about the C–N bond"
      },
      {
        "value": "D",
        "label": "D. sp; two linear sigma bonds"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Consider overlap between the nitrogen lone pair and carbonyl π orbitals.",
    "setup": "Draw the resonance contributor with N positive and O negative.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nThe nitrogen lone pair overlaps with the adjacent carbonyl π system. Resonance gives the C–N bond partial double-bond character and favors a planar, approximately sp² nitrogen. This delocalization reduces lone-pair availability for protonation compared with an ordinary amine.\n\nWhy the other choices fail:\nC: Free rotation and fully localized sp³ description ignore conjugation.\nD: The nitrogen has three sigma bonds and is not linear.\nA: Delocalization makes the lone pair less available, reducing basicity.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "Free rotation and fully localized sp³ description ignore conjugation."
      },
      {
        "option": "D",
        "explanation": "The nitrogen has three sigma bonds and is not linear."
      },
      {
        "option": "A",
        "explanation": "Delocalization makes the lone pair less available, reducing basicity."
      }
    ],
    "diagram": "",
    "hub": "structure",
    "subtopic": "Amide nitrogen geometry",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "structure / Amide nitrogen geometry",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Amide nitrogen geometry"
  },
  {
    "id": "v4-43",
    "subject": "Organic Chemistry I",
    "topic": "Avoid double-counting a carboxylic acid",
    "title": "Avoid double-counting a carboxylic acid",
    "prompt": "Which set correctly identifies the distinct functional groups in HOCH2CH2C(=O)OH?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Ether and aldehyde"
      },
      {
        "value": "B",
        "label": "B. Alcohol and ester"
      },
      {
        "value": "C",
        "label": "C. Alcohol and carboxylic acid"
      },
      {
        "value": "D",
        "label": "D. Two alcohols and a ketone"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Recognize combined carbonyl functional groups as units.",
    "setup": "Inspect what is bonded directly to the carbonyl carbon.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nThe terminal HOCH2 group is an alcohol. The C(=O)OH unit is one carboxylic-acid functional group, whose OH and carbonyl are interpreted together. It is not a separate ketone or alcohol, and no ester O–carbon substituent follows the acyl oxygen.\n\nWhy the other choices fail:\nD: A carboxyl OH is part of the acid group and its carbonyl is not a ketone.\nA: There is no oxygen joining two carbons as an ether or terminal CHO group.\nB: An ester would have C(=O)OR with R carbon-containing rather than H.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "A carboxyl OH is part of the acid group and its carbonyl is not a ketone."
      },
      {
        "option": "A",
        "explanation": "There is no oxygen joining two carbons as an ether or terminal CHO group."
      },
      {
        "option": "B",
        "explanation": "An ester would have C(=O)OR with R carbon-containing rather than H."
      }
    ],
    "diagram": "",
    "hub": "groups",
    "subtopic": "Avoid double-counting a carboxylic acid",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "groups / Avoid double-counting a carboxylic acid",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Avoid double-counting a carboxylic acid"
  },
  {
    "id": "v4-44",
    "subject": "Organic Chemistry I",
    "topic": "Name the highest-priority group",
    "title": "Name the highest-priority group",
    "prompt": "Choose the systematic name for CH3CH(OH)CH2COOH.",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 2-hydroxybutanoic acid"
      },
      {
        "value": "B",
        "label": "B. Butan-2-ol-4-oic acid"
      },
      {
        "value": "C",
        "label": "C. 3-hydroxybutanal"
      },
      {
        "value": "D",
        "label": "D. 3-hydroxybutanoic acid"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Number from the principal carboxylic-acid carbon.",
    "setup": "Choose the acid parent before assigning the hydroxy locant.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nThe carboxylic acid is the principal group and its carbon is carbon 1. Counting outward gives COOH(1)–CH2(2)–CH(OH)(3)–CH3(4). The parent is butanoic acid and the alcohol is named as the hydroxy substituent at carbon 3.\n\nWhy the other choices fail:\nA: Numbering begins at the acid carbon, not the methyl end.\nB: The acid supplies the suffix and fixes carbon 1; OH becomes a prefix.\nC: The terminal group is COOH, not CHO.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "Numbering begins at the acid carbon, not the methyl end."
      },
      {
        "option": "B",
        "explanation": "The acid supplies the suffix and fixes carbon 1; OH becomes a prefix."
      },
      {
        "option": "C",
        "explanation": "The terminal group is COOH, not CHO."
      }
    ],
    "diagram": "",
    "hub": "groups",
    "subtopic": "Name the highest-priority group",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "groups / Name the highest-priority group",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Name the highest-priority group"
  },
  {
    "id": "v4-45",
    "subject": "Organic Chemistry I",
    "topic": "Predict equilibrium with supplied pKa values",
    "title": "Predict equilibrium with supplied pKa values",
    "prompt": "For HA+B− ⇌ A−+HB, pKa(HA)=5 and pKa(HB)=10. Estimate K for the forward proton transfer.",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 10^5"
      },
      {
        "value": "B",
        "label": "B. 10^(−5)"
      },
      {
        "value": "C",
        "label": "C. 5"
      },
      {
        "value": "D",
        "label": "D. 10^15"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Compare the acid on each side of the reaction.",
    "setup": "Use K≈10^(pKa of product acid−pKa of reactant acid).",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nThe approximate proton-transfer equilibrium constant is 10^[pKa(HB)−pKa(HA)]. The difference is 10−5=5, so K≈10^5 and products are favored. The reaction converts the stronger acid HA into the weaker acid HB.\n\nWhy the other choices fail:\nB: Reversing the pKa difference gives the reverse reaction constant.\nC: pKa is logarithmic, so the difference is an exponent rather than K itself.\nD: Use the difference of pKa values, not their sum.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "Reversing the pKa difference gives the reverse reaction constant."
      },
      {
        "option": "C",
        "explanation": "pKa is logarithmic, so the difference is an exponent rather than K itself."
      },
      {
        "option": "D",
        "explanation": "Use the difference of pKa values, not their sum."
      }
    ],
    "diagram": "",
    "hub": "acids",
    "subtopic": "Predict equilibrium with supplied pKa values",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "acids / Predict equilibrium with supplied pKa values",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Predict equilibrium with supplied pKa values"
  },
  {
    "id": "v4-46",
    "subject": "Organic Chemistry I",
    "topic": "Induction and acid strength",
    "title": "Induction and acid strength",
    "prompt": "Which is the strongest acid among CH3COOH, ClCH2COOH, Cl2CHCOOH, and CH3CH2OH?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. CH3CH2OH"
      },
      {
        "value": "B",
        "label": "B. Cl2CHCOOH"
      },
      {
        "value": "C",
        "label": "C. ClCH2COOH"
      },
      {
        "value": "D",
        "label": "D. CH3COOH"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Compare stabilization of the conjugate bases.",
    "setup": "Separate resonance effects from the additional inductive effect of chlorine.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nCarboxylate conjugate bases distribute charge over two oxygens, unlike an alkoxide. Electron-withdrawing chlorine substituents further stabilize the conjugate base through induction. With two nearby chlorines, dichloroacetic acid is strongest among these choices.\n\nWhy the other choices fail:\nC: A second electron-withdrawing chlorine further increases acidity.\nD: The unsubstituted acid lacks chlorine’s inductive stabilization.\nA: An ordinary alcohol has a much less stabilized conjugate base than these carboxylic acids.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "A second electron-withdrawing chlorine further increases acidity."
      },
      {
        "option": "D",
        "explanation": "The unsubstituted acid lacks chlorine’s inductive stabilization."
      },
      {
        "option": "A",
        "explanation": "An ordinary alcohol has a much less stabilized conjugate base than these carboxylic acids."
      }
    ],
    "diagram": "",
    "hub": "acids",
    "subtopic": "Induction and acid strength",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "acids / Induction and acid strength",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Induction and acid strength"
  },
  {
    "id": "v4-47",
    "subject": "Organic Chemistry I",
    "topic": "Resonance preserves atomic connectivity",
    "title": "Resonance preserves atomic connectivity",
    "prompt": "Which proposed operation can relate two valid resonance contributors of an allylic carbocation?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Break a carbon-carbon sigma bond and reconnect the chain"
      },
      {
        "value": "B",
        "label": "B. Rotate a saturated single bond to get another conformation"
      },
      {
        "value": "C",
        "label": "C. Shift the neighboring π-electron pair toward the cation while keeping nuclei fixed"
      },
      {
        "value": "D",
        "label": "D. Move a hydrogen nucleus to the cationic carbon"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Only electrons move between resonance contributors.",
    "setup": "Keep the sigma framework fixed and track charge after moving a π pair.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nIn an allylic carbocation, moving a π pair forms a new π bond next to the original cation and relocates positive charge to the other end. This changes electron placement without moving atoms or changing the sigma skeleton. Resonance contributors describe one delocalized species.\n\nWhy the other choices fail:\nD: Moving a proton changes nuclear positions and is a chemical transformation, not resonance.\nA: Changing sigma connectivity generates a different constitutional structure.\nB: Conformers differ by geometry, not resonance electron placement.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "Moving a proton changes nuclear positions and is a chemical transformation, not resonance."
      },
      {
        "option": "A",
        "explanation": "Changing sigma connectivity generates a different constitutional structure."
      },
      {
        "option": "B",
        "explanation": "Conformers differ by geometry, not resonance electron placement."
      }
    ],
    "diagram": "",
    "hub": "resonance",
    "subtopic": "Resonance preserves atomic connectivity",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "resonance / Resonance preserves atomic connectivity",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Resonance preserves atomic connectivity"
  },
  {
    "id": "v4-48",
    "subject": "Organic Chemistry I",
    "topic": "Formal charge on a three-bond oxygen",
    "title": "Formal charge on a three-bond oxygen",
    "prompt": "An oxygen has three single bonds and one lone pair. What formal charge does it carry?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. −1"
      },
      {
        "value": "B",
        "label": "B. 0"
      },
      {
        "value": "C",
        "label": "C. +2"
      },
      {
        "value": "D",
        "label": "D. +1"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Assign half of each bonding pair to oxygen.",
    "setup": "Use formal charge=valence−nonbonding−one-half bonding electrons.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nOxygen has six valence electrons as a neutral atom. In this structure it is assigned two nonbonding electrons plus one electron from each of three bonds, totaling five. Formal charge is 6−5=+1, as in an oxonium center.\n\nWhy the other choices fail:\nA: A three-bond oxygen with one lone pair is electron-deficient by formal counting, not negative.\nB: Neutral oxygen ordinarily has two bonds and two lone pairs.\nC: The assigned count is five rather than four.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "A three-bond oxygen with one lone pair is electron-deficient by formal counting, not negative."
      },
      {
        "option": "B",
        "explanation": "Neutral oxygen ordinarily has two bonds and two lone pairs."
      },
      {
        "option": "C",
        "explanation": "The assigned count is five rather than four."
      }
    ],
    "diagram": "",
    "hub": "resonance",
    "subtopic": "Formal charge on a three-bond oxygen",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "resonance / Formal charge on a three-bond oxygen",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Formal charge on a three-bond oxygen"
  },
  {
    "id": "v4-49",
    "subject": "Organic Chemistry I",
    "topic": "A chair flip preserves configuration",
    "title": "A chair flip preserves configuration",
    "prompt": "For methylcyclohexane in a chair with methyl axial up, what does a ring flip do?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Makes methyl equatorial up; the flipped form is usually more stable"
      },
      {
        "value": "B",
        "label": "B. Makes methyl equatorial down; configuration inverts"
      },
      {
        "value": "C",
        "label": "C. Keeps methyl axial up; only hydrogens move"
      },
      {
        "value": "D",
        "label": "D. Makes methyl equatorial up; the flipped form is less stable"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Track up/down separately from axial/equatorial.",
    "setup": "A chair flip swaps axial and equatorial but does not invert a stereocenter.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nA chair flip exchanges axial and equatorial positions while preserving whether each substituent points up or down. Thus axial-up methyl becomes equatorial-up. Equatorial methyl avoids the unfavorable axial interactions and is generally favored in this monosubstituted ring.\n\nWhy the other choices fail:\nB: Up/down orientation is preserved during a chair flip.\nC: The methyl group changes axial/equatorial position along with the ring.\nD: Equatorial placement reduces steric axial interactions for methyl.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "Up/down orientation is preserved during a chair flip."
      },
      {
        "option": "C",
        "explanation": "The methyl group changes axial/equatorial position along with the ring."
      },
      {
        "option": "D",
        "explanation": "Equatorial placement reduces steric axial interactions for methyl."
      }
    ],
    "diagram": "",
    "hub": "conformations",
    "subtopic": "A chair flip preserves configuration",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "conformations / A chair flip preserves configuration",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A chair flip preserves configuration"
  },
  {
    "id": "v4-50",
    "subject": "Organic Chemistry I",
    "topic": "Distinguish conformation from configuration",
    "title": "Distinguish conformation from configuration",
    "prompt": "Which pair can interconvert by ordinary single-bond rotation without breaking bonds?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Cis- and trans-1,2-dimethylcyclopropane"
      },
      {
        "value": "B",
        "label": "B. Anti and gauche conformers of n-butane"
      },
      {
        "value": "C",
        "label": "C. (R)- and (S)-2-butanol"
      },
      {
        "value": "D",
        "label": "D. E- and Z-2-butene"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Ask whether the difference is only a dihedral angle about a sigma bond.",
    "setup": "Separate conformers from configurational stereoisomers.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nRotating around the central C–C sigma bond of n-butane changes the dihedral angle between methyl groups, interconverting anti and gauche conformers. The other pairs differ in configuration, which ordinary single-bond rotation cannot change. Rotation around a double bond would disrupt π overlap.\n\nWhy the other choices fail:\nC: Single-bond rotation does not invert the configuration of one tetrahedral stereocenter.\nD: An alkene π bond prevents ordinary free rotation between E and Z.\nA: Ring connectivity locks the relative faces in this small ring.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "Single-bond rotation does not invert the configuration of one tetrahedral stereocenter."
      },
      {
        "option": "D",
        "explanation": "An alkene π bond prevents ordinary free rotation between E and Z."
      },
      {
        "option": "A",
        "explanation": "Ring connectivity locks the relative faces in this small ring."
      }
    ],
    "diagram": "",
    "hub": "conformations",
    "subtopic": "Distinguish conformation from configuration",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "conformations / Distinguish conformation from configuration",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Distinguish conformation from configuration"
  },
  {
    "id": "v4-51",
    "subject": "Organic Chemistry I",
    "topic": "CIP priorities beyond the first atom",
    "title": "CIP priorities beyond the first atom",
    "prompt": "At a stereocenter attached to OH, CHO, CH2OH, and H, what is the descending CIP priority?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. OH > CH2OH > CHO > H"
      },
      {
        "value": "B",
        "label": "B. H > OH > CHO > CH2OH"
      },
      {
        "value": "C",
        "label": "C. OH > CHO > CH2OH > H"
      },
      {
        "value": "D",
        "label": "D. CHO > OH > CH2OH > H"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Resolve the carbon tie using multiple-bond duplicate-atom bookkeeping.",
    "setup": "Compare first atoms, then sorted neighbor lists for tied atoms.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nThe directly attached oxygen in OH outranks carbon, and H is last. To compare the carbon groups, represent the aldehyde double bond by duplicate oxygen entries: CHO has [O,O,H], while CH2OH has [O,H,H]. The first difference gives CHO priority over CH2OH.\n\nWhy the other choices fail:\nD: Directly attached atomic number is compared before atoms farther away.\nA: The carbonyl’s duplicate oxygen gives CHO higher priority.\nB: Hydrogen has the lowest atomic number among the directly attached atoms.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "Directly attached atomic number is compared before atoms farther away."
      },
      {
        "option": "A",
        "explanation": "The carbonyl’s duplicate oxygen gives CHO higher priority."
      },
      {
        "option": "B",
        "explanation": "Hydrogen has the lowest atomic number among the directly attached atoms."
      }
    ],
    "diagram": "",
    "hub": "stereo",
    "subtopic": "CIP priorities beyond the first atom",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "stereo / CIP priorities beyond the first atom",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "CIP priorities beyond the first atom"
  },
  {
    "id": "v4-52",
    "subject": "Organic Chemistry I",
    "topic": "Invert a front-facing priority four",
    "title": "Invert a front-facing priority four",
    "prompt": "A stereocenter has priority 4 pointing directly toward you. In the drawing, 1→2→3 runs clockwise. What is the configuration?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. R"
      },
      {
        "value": "B",
        "label": "B. E"
      },
      {
        "value": "C",
        "label": "C. Achiral necessarily"
      },
      {
        "value": "D",
        "label": "D. S"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Check which way the lowest-priority group points.",
    "setup": "Reverse the apparent clockwise/counterclockwise assignment when priority 4 points toward you.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nThe clockwise-to-R rule applies only with priority 4 directed away. Here priority 4 points toward the viewer, so the observed direction must be reversed. The center therefore has S configuration; the clockwise trace alone is insufficient without depth orientation.\n\nWhy the other choices fail:\nA: This neglects reversal for a front-facing lowest-priority group.\nB: E is an alkene descriptor, not the tetrahedral descriptor requested.\nC: Four different substituents may still form a chiral center regardless of viewing direction.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "This neglects reversal for a front-facing lowest-priority group."
      },
      {
        "option": "B",
        "explanation": "E is an alkene descriptor, not the tetrahedral descriptor requested."
      },
      {
        "option": "C",
        "explanation": "Four different substituents may still form a chiral center regardless of viewing direction."
      }
    ],
    "diagram": "",
    "hub": "stereo",
    "subtopic": "Invert a front-facing priority four",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "stereo / Invert a front-facing priority four",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Invert a front-facing priority four"
  },
  {
    "id": "v4-53",
    "subject": "Organic Chemistry I",
    "topic": "E/Z with unequal atoms",
    "title": "E/Z with unequal atoms",
    "prompt": "An alkene has Cl above and CH3 below on its left carbon; on its right carbon CH2CH3 is above and H below. What is its configuration?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Z"
      },
      {
        "value": "B",
        "label": "B. E"
      },
      {
        "value": "C",
        "label": "C. R"
      },
      {
        "value": "D",
        "label": "D. No E/Z designation is possible"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Use CIP independently on each end of the double bond.",
    "setup": "Compare the positions of the higher-priority substituent at each carbon.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nOn the left, Cl has higher priority than the carbon of CH3. On the right, the carbon of ethyl outranks hydrogen. These two higher-priority substituents are both above the double bond, so the configuration is Z. Each alkene carbon has two different substituents.\n\nWhy the other choices fail:\nB: The higher-priority groups lie on the same side, not opposite sides.\nC: R describes tetrahedral chirality, not this alkene geometry.\nD: Both alkene carbons have distinct substituents, so E/Z is defined.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "The higher-priority groups lie on the same side, not opposite sides."
      },
      {
        "option": "C",
        "explanation": "R describes tetrahedral chirality, not this alkene geometry."
      },
      {
        "option": "D",
        "explanation": "Both alkene carbons have distinct substituents, so E/Z is defined."
      }
    ],
    "diagram": "",
    "hub": "stereo",
    "subtopic": "E/Z with unequal atoms",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "stereo / E/Z with unequal atoms",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "E/Z with unequal atoms"
  },
  {
    "id": "v4-54",
    "subject": "Organic Chemistry I",
    "topic": "Symmetry reduces the stereoisomer count",
    "title": "Symmetry reduces the stereoisomer count",
    "prompt": "How many configurational stereoisomers does 2,3-dibromobutane have, and why?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 1: every form is achiral"
      },
      {
        "value": "B",
        "label": "B. 3: one enantiomeric pair and one meso form"
      },
      {
        "value": "C",
        "label": "C. 4: all 2² configurations are distinct"
      },
      {
        "value": "D",
        "label": "D. 2: only a meso pair"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Check molecular symmetry before using 2^n as an exact count.",
    "setup": "List RR, SS, RS, SR and identify symmetry-equivalent descriptions.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nTwo stereocenters give a maximum of four configurations, but internal symmetry makes the R,S and S,R descriptions represent the same meso stereoisomer. The R,R and S,S forms are an enantiomeric pair. Thus there are three configurational stereoisomers total.\n\nWhy the other choices fail:\nC: The 2^n rule is an upper bound; symmetry can reduce the total.\nD: A meso form is achiral and does not have a distinct enantiomer.\nA: The R,R and S,S structures are chiral and mutually non-superimposable.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "The 2^n rule is an upper bound; symmetry can reduce the total."
      },
      {
        "option": "D",
        "explanation": "A meso form is achiral and does not have a distinct enantiomer."
      },
      {
        "option": "A",
        "explanation": "The R,R and S,S structures are chiral and mutually non-superimposable."
      }
    ],
    "diagram": "",
    "hub": "stereo",
    "subtopic": "Symmetry reduces the stereoisomer count",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "stereo / Symmetry reduces the stereoisomer count",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Symmetry reduces the stereoisomer count"
  },
  {
    "id": "v4-55",
    "subject": "Organic Chemistry I",
    "topic": "A catalyst changes rates, not equilibrium",
    "title": "A catalyst changes rates, not equilibrium",
    "prompt": "A catalyst lowers the activation free energy of a reversible reaction without changing reactant or product free energies. Which statement follows?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. The reaction free energy becomes more negative"
      },
      {
        "value": "B",
        "label": "B. The equilibrium constant increases because the barrier is lower"
      },
      {
        "value": "C",
        "label": "C. Both directions speed up; equilibrium constant is unchanged"
      },
      {
        "value": "D",
        "label": "D. Only the forward reaction speeds up; products become favored"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Separate the transition-state barrier from the reactant-product energy difference.",
    "setup": "Use rate ↔ activation barrier and equilibrium ↔ reaction free energy.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nA catalyst provides an alternative kinetic pathway while preserving the free-energy difference between reactants and products. It lowers the effective barriers for both directions and accelerates approach to equilibrium. The equilibrium constant depends on the reaction free energy, which is unchanged.\n\nWhy the other choices fail:\nD: Catalysts do not selectively change equilibrium composition by accelerating only one direction.\nA: Reactant and product free energies were explicitly held fixed.\nB: Activation barriers control rates; the state free-energy difference controls equilibrium.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "Catalysts do not selectively change equilibrium composition by accelerating only one direction."
      },
      {
        "option": "A",
        "explanation": "Reactant and product free energies were explicitly held fixed."
      },
      {
        "option": "B",
        "explanation": "Activation barriers control rates; the state free-energy difference controls equilibrium."
      }
    ],
    "diagram": "",
    "hub": "reactions",
    "subtopic": "A catalyst changes rates, not equilibrium",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "reactions / A catalyst changes rates, not equilibrium",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A catalyst changes rates, not equilibrium"
  },
  {
    "id": "v4-56",
    "subject": "Organic Chemistry I",
    "topic": "Hydroboration of a terminal alkene",
    "title": "Hydroboration of a terminal alkene",
    "prompt": "Treat 1-hexene with BH3·THF, then H2O2/OH−. What is the principal alcohol connectivity?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Hexan-2-ol"
      },
      {
        "value": "B",
        "label": "B. Hexan-3-ol"
      },
      {
        "value": "C",
        "label": "C. Hexan-1,2-diol"
      },
      {
        "value": "D",
        "label": "D. Hexan-1-ol"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Track which carbon receives boron, then oxygen.",
    "setup": "Apply anti-Markovnikov hydration connectivity for a terminal alkene.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nHydroboration places boron preferentially at the less substituted end of a terminal alkene. Oxidation replaces the carbon-boron bond with a carbon-oxygen bond while retaining its position. The resulting anti-Markovnikov alcohol is hexan-1-ol; this sequence adds one OH, not two.\n\nWhy the other choices fail:\nA: This is the Markovnikov hydration connectivity, unlike hydroboration-oxidation.\nB: The reaction does not move the alkene inward to install OH at carbon 3.\nC: A dihydroxylation reagent sequence is needed to install two OH groups.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "This is the Markovnikov hydration connectivity, unlike hydroboration-oxidation."
      },
      {
        "option": "B",
        "explanation": "The reaction does not move the alkene inward to install OH at carbon 3."
      },
      {
        "option": "C",
        "explanation": "A dihydroxylation reagent sequence is needed to install two OH groups."
      }
    ],
    "diagram": "",
    "hub": "reactions",
    "subtopic": "Hydroboration of a terminal alkene",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "reactions / Hydroboration of a terminal alkene",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Hydroboration of a terminal alkene"
  },
  {
    "id": "v4-57",
    "subject": "Organic Chemistry I",
    "topic": "Partial reduction controls alkene geometry",
    "title": "Partial reduction controls alkene geometry",
    "prompt": "Which reagent converts 2-butyne predominantly to cis-2-butene without continuing to butane under standard controlled conditions?",
    "answer": [
      "A"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. H2 with Lindlar catalyst"
      },
      {
        "value": "B",
        "label": "B. H2 with excess Pd/C"
      },
      {
        "value": "C",
        "label": "C. Na in liquid NH3"
      },
      {
        "value": "D",
        "label": "D. HBr, one equivalent"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Distinguish partial syn reduction from complete or dissolving-metal reduction.",
    "setup": "Choose a reagent that stops at an alkene and adds the two hydrogens syn.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: A.\n\nLindlar catalyst is a poisoned hydrogenation catalyst used for partial alkyne reduction. Syn delivery of hydrogen produces the cis alkene and the catalyst suppresses continued hydrogenation. For 2-butyne this gives cis-2-butene, equivalent to the Z configuration.\n\nWhy the other choices fail:\nB: An active Pd/C catalyst with excess hydrogen typically reduces fully to the alkane.\nC: Dissolving-metal reduction produces the trans alkene under standard conditions.\nD: HBr adds hydrogen and bromine, not two hydrogens.",
    "distractorExplanations": [
      {
        "option": "B",
        "explanation": "An active Pd/C catalyst with excess hydrogen typically reduces fully to the alkane."
      },
      {
        "option": "C",
        "explanation": "Dissolving-metal reduction produces the trans alkene under standard conditions."
      },
      {
        "option": "D",
        "explanation": "HBr adds hydrogen and bromine, not two hydrogens."
      }
    ],
    "diagram": "",
    "hub": "alkynes",
    "subtopic": "Partial reduction controls alkene geometry",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "alkynes / Partial reduction controls alkene geometry",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Partial reduction controls alkene geometry"
  },
  {
    "id": "v4-58",
    "subject": "Organic Chemistry I",
    "topic": "SN2 rate responds to both reactants",
    "title": "SN2 rate responds to both reactants",
    "prompt": "For an elementary SN2 reaction with rate=k[RX][Nu−], doubling RX and tripling Nu− changes the rate by what factor?",
    "answer": [
      "B"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. 5"
      },
      {
        "value": "B",
        "label": "B. 6"
      },
      {
        "value": "C",
        "label": "C. 2"
      },
      {
        "value": "D",
        "label": "D. 3"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Apply each concentration factor to its own first-order term.",
    "setup": "Divide the new rate expression by the original one.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: B.\n\nThe bimolecular rate law is first order in each reactant. The new rate is k(2[RX])(3[Nu−])=6k[RX][Nu−]. Therefore the rate increases sixfold, assuming temperature, solvent, and the rate constant remain unchanged.\n\nWhy the other choices fail:\nC: This includes only the substrate concentration change.\nD: This includes only the nucleophile concentration change.\nA: Independent multiplicative concentration factors multiply, not add.",
    "distractorExplanations": [
      {
        "option": "C",
        "explanation": "This includes only the substrate concentration change."
      },
      {
        "option": "D",
        "explanation": "This includes only the nucleophile concentration change."
      },
      {
        "option": "A",
        "explanation": "Independent multiplicative concentration factors multiply, not add."
      }
    ],
    "diagram": "",
    "hub": "substitution",
    "subtopic": "SN2 rate responds to both reactants",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "substitution / SN2 rate responds to both reactants",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "SN2 rate responds to both reactants"
  },
  {
    "id": "v4-59",
    "subject": "Organic Chemistry I",
    "topic": "A cyclohexane E2 requires the right chair",
    "title": "A cyclohexane E2 requires the right chair",
    "prompt": "For E2 elimination from a cyclohexyl halide, which geometry is required between the leaving group and the β-H being removed?",
    "answer": [
      "C"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Axial leaving group and equatorial β-H"
      },
      {
        "value": "B",
        "label": "B. Both axial and pointing to the same face"
      },
      {
        "value": "C",
        "label": "C. Both axial on adjacent carbons, one up and one down"
      },
      {
        "value": "D",
        "label": "D. Both equatorial on adjacent carbons"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Translate antiperiplanar into chair geometry.",
    "setup": "Locate an axial leaving group and an adjacent axial hydrogen on the opposite face.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: C.\n\nThe E2 pathway requires an approximately antiperiplanar C–H and C–leaving-group arrangement. In a cyclohexane chair this is achieved by trans-diaxial substituents on adjacent carbons. A chair flip may be required to make the leaving group axial, and only an available axial β-H can then be removed.\n\nWhy the other choices fail:\nD: Diequatorial placement does not provide the needed antiperiplanar geometry in a chair.\nA: The adjacent equatorial C–H bond is not antiperiplanar to the axial leaving group.\nB: Adjacent axial bonds alternate up and down; same-face placement is not the required trans relation.",
    "distractorExplanations": [
      {
        "option": "D",
        "explanation": "Diequatorial placement does not provide the needed antiperiplanar geometry in a chair."
      },
      {
        "option": "A",
        "explanation": "The adjacent equatorial C–H bond is not antiperiplanar to the axial leaving group."
      },
      {
        "option": "B",
        "explanation": "Adjacent axial bonds alternate up and down; same-face placement is not the required trans relation."
      }
    ],
    "diagram": "",
    "hub": "substitution",
    "subtopic": "A cyclohexane E2 requires the right chair",
    "difficulty": "Integration",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Challenge · original practice",
    "topicScope": "substitution / A cyclohexane E2 requires the right chair",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "A cyclohexane E2 requires the right chair"
  },
  {
    "id": "v4-60",
    "subject": "Organic Chemistry I",
    "topic": "Combine formula and spectroscopy",
    "title": "Combine formula and spectroscopy",
    "prompt": "An unknown C3H6O has a strong IR band near 1715 cm−1 and one 1H NMR singlet integrating to 6 H. Which structure best fits?",
    "answer": [
      "D"
    ],
    "options": [
      {
        "value": "A",
        "label": "A. Propanal"
      },
      {
        "value": "B",
        "label": "B. Allyl alcohol"
      },
      {
        "value": "C",
        "label": "C. Methoxyethene"
      },
      {
        "value": "D",
        "label": "D. Propanone (acetone)"
      }
    ],
    "clarify": "Select one complete answer. Explain your reasoning in the work field before checking; options describe the stated idealized conditions.",
    "hint": "Use all three constraints rather than the IR band alone.",
    "setup": "Combine hydrogen deficiency, carbonyl evidence, and proton equivalence.",
    "calculate": "Carry out your setup and compare it against every option. Check signs, domains, units, or stereochemical conventions as relevant.",
    "solution": "Correct choice: D.\n\nThe formula gives one degree of unsaturation, and the IR band supports a carbonyl. Propanone has two symmetry-equivalent methyl groups with no adjacent carbon-bound hydrogens to split them, giving one six-proton singlet. Propanal would have several proton environments, including an aldehydic proton.\n\nWhy the other choices fail:\nA: Propanal has an aldehydic H plus distinct CH2 and CH3 environments.\nB: Allyl alcohol lacks a carbonyl and would show multiple proton environments.\nC: An enol ether lacks the indicated carbonyl and has inequivalent vinyl protons.",
    "distractorExplanations": [
      {
        "option": "A",
        "explanation": "Propanal has an aldehydic H plus distinct CH2 and CH3 environments."
      },
      {
        "option": "B",
        "explanation": "Allyl alcohol lacks a carbonyl and would show multiple proton environments."
      },
      {
        "option": "C",
        "explanation": "An enol ether lacks the indicated carbonyl and has inequivalent vinyl protons."
      }
    ],
    "diagram": "",
    "hub": "spectra",
    "subtopic": "Combine formula and spectroscopy",
    "difficulty": "Core",
    "type": "Conceptual",
    "minutes": 6,
    "source": "Original authored problem; public textbook concept reference: https://openstax.org/details/books/organic-chemistry. Not an RPI exam question.",
    "sourceTag": "OpenStax first-course concepts · Exam-Ready · original practice",
    "topicScope": "spectra / Combine formula and spectroscopy",
    "units": "",
    "rubric": [
      "State the principle and any domain or geometry constraints.",
      "Show the intermediate reasoning before selecting a choice.",
      "Check why competing choices fail without opening the solution first."
    ],
    "kind": "text",
    "objective": "Combine formula and spectroscopy"
  }
]);

/* Original molecular integration challenges. */
bank.push(...[
  {
    "id": "v5-chem-1",
    "subject": "Organic Chemistry I",
    "topic": "Two doses of HCl: branched terminal alkyne",
    "title": "Two doses of HCl: branched terminal alkyne",
    "prompt": "Treat 5-methylhex-1-yne with one equivalent of HCl, then treat that product with a second equivalent of HCl (no peroxides). Draw product A after the first dose and product B after the second. Explain why the two chlorine atoms end up on the same carbon and whether A can have E/Z isomers.",
    "reactant": "C#CCCC(C)C",
    "reactantLabel": "Starting material: 5-methylhex-1-yne",
    "products": [
      {
        "label": "Product A",
        "smiles": "C=C(Cl)CCC(C)C",
        "stereo": false
      },
      {
        "label": "Product B",
        "smiles": "CC(Cl)(Cl)CCC(C)C",
        "stereo": false
      }
    ],
    "kind": "molecule",
    "hub": "alkynes",
    "subtopic": "Two doses of HCl: branched terminal alkyne",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "alkynes / Two doses of HCl: branched terminal alkyne",
    "units": "",
    "objective": "Two doses of HCl: branched terminal alkyne",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "Follow Markovnikov orientation at each addition; do not move the methyl branch.",
    "setup": "Number the terminal alkyne carbons C1 and C2. Track bond order and H/Cl addition one equivalent at a time.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "A is 2-chloro-5-methylhex-1-ene. B is 2,2-dichloro-5-methylhexane.\nEach dose adds H to terminal C1 and Cl to C2; the second dose converts the alkene into a geminal dichloride.\nA has CH2 at one end of its double bond, so E/Z is not defined. Neither step changes the carbon skeleton.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-2",
    "subject": "Organic Chemistry I",
    "topic": "HBr equivalents versus vicinal addition",
    "title": "HBr equivalents versus vicinal addition",
    "prompt": "A sample of 4-methylhex-1-yne receives two equivalents of HBr without peroxides. Draw the final product. In your reasoning, name the product, explain geminal versus vicinal substitution, and say why the alkene is not the final product. Ignore stereochemistry at the pre-existing branch center.",
    "reactant": "C#CCC(C)CC",
    "reactantLabel": "Starting material: 4-methylhex-1-yne",
    "products": [
      {
        "label": "Final product",
        "smiles": "CC(Br)(Br)CC(C)CC",
        "stereo": false
      }
    ],
    "kind": "molecule",
    "hub": "alkynes",
    "subtopic": "HBr equivalents versus vicinal addition",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "alkynes / HBr equivalents versus vicinal addition",
    "units": "",
    "objective": "HBr equivalents versus vicinal addition",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "An alkyne consumes two equivalents to become saturated.",
    "setup": "Keep the seven-carbon skeleton and place each newly added bromine by the same regiochemical rule.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "The product is 2,2-dibromo-4-methylhexane.\nThe first equivalent forms a vinyl bromide; the second removes the remaining pi bond.\nBoth bromines are on C2 (geminal), not on adjacent carbons (vicinal). This is a haloalkane, not an unsubstituted alkane.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-3",
    "subject": "Organic Chemistry I",
    "topic": "One substrate, two hydration routes",
    "title": "One substrate, two hydration routes",
    "prompt": "Use separate samples of hex-1-yne. Route A uses HgSO4, H2SO4 and H2O. Route B uses 1) (Sia)2BH 2) H2O2, OH−. Draw each final carbonyl product, not the enol. Explain how regiochemistry and tautomerization determine the difference.",
    "reactant": "C#CCCCC",
    "reactantLabel": "Starting material: C#CCCCC",
    "products": [
      {
        "label": "Route A",
        "smiles": "CC(=O)CCCC",
        "stereo": false
      },
      {
        "label": "Route B",
        "smiles": "O=CCCCCC",
        "stereo": false
      }
    ],
    "kind": "molecule",
    "hub": "alkynes",
    "subtopic": "One substrate, two hydration routes",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "alkynes / One substrate, two hydration routes",
    "units": "",
    "objective": "One substrate, two hydration routes",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "The two methods put oxygen on different alkyne carbons.",
    "setup": "Draw the enol for each route on paper, then move a proton and the double bond to obtain its carbonyl tautomer.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "A is hexan-2-one: Markovnikov hydration first gives the C2 enol, then a methyl ketone.\nB is hexanal: bulky-borane hydroboration–oxidation places oxygen at terminal C1, and tautomerization gives an aldehyde.\nTautomers differ in atom connectivity; they are not resonance contributors.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-4",
    "subject": "Organic Chemistry I",
    "topic": "Selective reduction: draw both geometries",
    "title": "Selective reduction: draw both geometries",
    "prompt": "Treat separate samples of hex-3-yne with A) H2, Lindlar catalyst and B) Na in liquid NH3. Draw both products with the correct alkene geometry. Explain why neither answer should be hexane. Stereochemistry IS checked.",
    "reactant": "CCC#CCC",
    "reactantLabel": "Starting material: CCC#CCC",
    "products": [
      {
        "label": "Product A",
        "smiles": "CC/C=C\\CC",
        "stereo": true
      },
      {
        "label": "Product B",
        "smiles": "CC/C=C/CC",
        "stereo": true
      }
    ],
    "kind": "molecule",
    "hub": "alkynes",
    "subtopic": "Selective reduction: draw both geometries",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "alkynes / Selective reduction: draw both geometries",
    "units": "",
    "objective": "Selective reduction: draw both geometries",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "Compare syn delivery on a catalyst with dissolving-metal reduction.",
    "setup": "Keep C3=C4 in both products; assign the side of each ethyl substituent before drawing.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "A is (Z)-hex-3-ene from syn partial hydrogenation. B is (E)-hex-3-ene from dissolving-metal reduction.\nLindlar catalyst is poisoned to stop at the alkene; dissolving-metal conditions also yield an alkene.\nUnpoisoned Pd with excess H2 instead reduces all the way to hexane.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-5",
    "subject": "Organic Chemistry I",
    "topic": "Hydration: enol versus isolated ketone",
    "title": "Hydration: enol versus isolated ketone",
    "prompt": "Hydrate pent-1-yne using HgSO4, H2SO4 and water. Draw A, the enol after addition, and B, the major isolated carbonyl tautomer. Explain why converting A into B requires proton transfer rather than simply shifting electrons.",
    "reactant": "C#CCCC",
    "reactantLabel": "Starting material: C#CCCC",
    "products": [
      {
        "label": "Enol A",
        "smiles": "C=C(O)CCC",
        "stereo": false
      },
      {
        "label": "Carbonyl B",
        "smiles": "CC(=O)CCC",
        "stereo": false
      }
    ],
    "kind": "molecule",
    "hub": "alkynes",
    "subtopic": "Hydration: enol versus isolated ketone",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "alkynes / Hydration: enol versus isolated ketone",
    "units": "",
    "objective": "Hydration: enol versus isolated ketone",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "The carbon bearing OH in the enol becomes the carbonyl carbon.",
    "setup": "Mark the C1=C2 bond in the enol, then identify which atom gains H as C2=O forms.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "A is pent-1-en-2-ol; B is pentan-2-one.\nA proton moves from oxygen to terminal carbon through acid/base-mediated steps while the pi bond moves onto oxygen.\nThe sigma bonding of hydrogen changes, so these are constitutional tautomers, not resonance structures.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-6",
    "subject": "Organic Chemistry I",
    "topic": "Alkyne chain extension followed by reduction",
    "title": "Alkyne chain extension followed by reduction",
    "prompt": "Starting with but-1-yne, use 1) NaNH2 2) CH3CH2Br. Draw the neutral carbon-chain extension product A. Then treat A with H2/Lindlar and draw B, including geometry. Explain why a primary alkyl bromide is suitable for the chain-extension step.",
    "reactant": "C#CCC",
    "reactantLabel": "Starting material: C#CCC",
    "products": [
      {
        "label": "Extended alkyne A",
        "smiles": "CCC#CCC",
        "stereo": false
      },
      {
        "label": "Reduced product B",
        "smiles": "CC/C=C\\CC",
        "stereo": true
      }
    ],
    "kind": "molecule",
    "hub": "alkynes",
    "subtopic": "Alkyne chain extension followed by reduction",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "alkynes / Alkyne chain extension followed by reduction",
    "units": "",
    "objective": "Alkyne chain extension followed by reduction",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "A terminal acetylide can form a new carbon–carbon bond by SN2.",
    "setup": "Remove only the terminal alkyne H, add the electrophile’s two carbons at that end, then apply partial reduction.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "A is hex-3-yne; B is (Z)-hex-3-ene.\nNaNH2 deprotonates the terminal alkyne. The acetylide displaces bromide from primary bromoethane by SN2, adding two carbons.\nLindlar reduction is syn. A tertiary alkyl halide would favor elimination instead of the desired SN2 alkylation.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-7",
    "subject": "Organic Chemistry I",
    "topic": "Alkene hydration: compare oxygen placement",
    "title": "Alkene hydration: compare oxygen placement",
    "prompt": "Use separate samples of 2-methylbut-1-ene. A) 1. Hg(OAc)2, H2O 2. NaBH4. B) 1. BH3·THF 2. H2O2, OH−. Draw the constitutional alcohol product for each route. Explain regioselectivity and whether route B creates a stereocenter. Connectivity only is graded.",
    "reactant": "C=C(C)CC",
    "reactantLabel": "Starting material: C=C(C)CC",
    "products": [
      {
        "label": "Alcohol A",
        "smiles": "CC(O)(C)CC",
        "stereo": false
      },
      {
        "label": "Alcohol B",
        "smiles": "OCC(C)CC",
        "stereo": false
      }
    ],
    "kind": "molecule",
    "hub": "reactions",
    "subtopic": "Alkene hydration: compare oxygen placement",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "reactions / Alkene hydration: compare oxygen placement",
    "units": "",
    "objective": "Alkene hydration: compare oxygen placement",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "One route is Markovnikov without rearrangement; the other is anti-Markovnikov.",
    "setup": "Label the two original alkene carbons and decide where OH belongs for each route.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "A is 2-methylbutan-2-ol. B is 2-methylbutan-1-ol.\nOxymercuration–demercuration places OH at the more substituted carbon without carbocation rearrangement. Hydroboration–oxidation places OH at the less substituted carbon.\nB has a stereocenter at C2 and is formed as a racemic pair from the achiral alkene/reagents. This task grades connectivity only.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-8",
    "subject": "Organic Chemistry I",
    "topic": "Peroxide effect: two HBr pathways",
    "title": "Peroxide effect: two HBr pathways",
    "prompt": "Use separate samples of pent-1-ene. Add HBr to A without peroxides and to B with radical-initiating peroxides. Draw the major constitutional product in each case, and explain why the peroxide rule should not be generalized to HCl. Do not specify enantiomers.",
    "reactant": "C=CCCC",
    "reactantLabel": "Starting material: C=CCCC",
    "products": [
      {
        "label": "Ionic product A",
        "smiles": "CC(Br)CCC",
        "stereo": false
      },
      {
        "label": "Radical product B",
        "smiles": "BrCCCCC",
        "stereo": false
      }
    ],
    "kind": "molecule",
    "hub": "reactions",
    "subtopic": "Peroxide effect: two HBr pathways",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "reactions / Peroxide effect: two HBr pathways",
    "units": "",
    "objective": "Peroxide effect: two HBr pathways",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "Compare carbocation stability with the radical chain pathway.",
    "setup": "Track where Br goes under ionic versus radical conditions; keep the carbon skeleton fixed.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "A is 2-bromopentane; B is 1-bromopentane.\nIonic addition follows Markovnikov orientation. The peroxide-initiated radical chain of HBr favors anti-Markovnikov orientation.\nThe propagation energetics do not support applying this rule generally to HCl or HI. A is racemic, but stereochemistry is not graded here.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-9",
    "subject": "Organic Chemistry I",
    "topic": "SN2 substitution versus bulky-base elimination",
    "title": "SN2 substitution versus bulky-base elimination",
    "prompt": "Use separate samples of 2-bromobutane. A) NaCN in DMSO under substitution-favoring conditions. B) KOtBu in tert-butanol with heat. Draw the substitution product for A and the major Hofmann alkene for B. Explain the carbon count in A and why B favors the less substituted double bond. Connectivity only is graded.",
    "reactant": "CC(Br)CC",
    "reactantLabel": "Starting material: CC(Br)CC",
    "products": [
      {
        "label": "Substitution A",
        "smiles": "CC(C#N)CC",
        "stereo": false
      },
      {
        "label": "Elimination B",
        "smiles": "C=CCC",
        "stereo": false
      }
    ],
    "kind": "molecule",
    "hub": "substitution",
    "subtopic": "SN2 substitution versus bulky-base elimination",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "substitution / SN2 substitution versus bulky-base elimination",
    "units": "",
    "objective": "SN2 substitution versus bulky-base elimination",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "Cyanide bonds through its carbon; a bulky base removes the more accessible beta H.",
    "setup": "A replaces Br with C≡N. For B, compare beta-H sites on either side of the leaving group.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "A is 2-methylbutanenitrile: cyanide contributes one carbon, giving five carbons total. An enantiopure substrate would undergo inversion at the reacting center.\nB is predominantly but-1-ene under the stated bulky-base conditions.\nThe primary beta position is less hindered; E2 competes with substitution and can give minor but-2-enes.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-10",
    "subject": "Organic Chemistry I",
    "topic": "Diels–Alder: preserve the carbonyl",
    "title": "Diels–Alder: preserve the carbonyl",
    "prompt": "Heat buta-1,3-diene with methyl vinyl ketone, CH2=CH–C(=O)CH3. Draw the cycloaddition product. Explain which original diene bond becomes the product double bond, how many new sigma bonds form, and why the carbonyl is retained. This symmetric diene gives no competing constitutional regioisomer.",
    "reactant": "C=CC=C.C=CC(=O)C",
    "reactantLabel": "Starting material: C=CC=C.C=CC(=O)C",
    "products": [
      {
        "label": "Cycloadduct",
        "smiles": "CC(=O)C1CC=CCC1",
        "stereo": false
      }
    ],
    "kind": "molecule",
    "hub": "reactions",
    "subtopic": "Diels–Alder: preserve the carbonyl",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "reactions / Diels–Alder: preserve the carbonyl",
    "units": "",
    "objective": "Diels–Alder: preserve the carbonyl",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "The diene and alkene make a six-membered ring in a concerted [4+2] process.",
    "setup": "Connect the two ends of the diene to the two alkene carbons. Leave the carbonyl outside the new ring.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "The product is 1-(cyclohex-3-en-1-yl)ethan-1-one.\nTwo new carbon–carbon sigma bonds form. The diene’s original central single bond becomes the ring double bond.\nThe dienophile’s C=C is consumed; its C=O remains as an acetyl substituent. The unsymmetrical substituted ring center is formed racemically; this task grades connectivity.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-11",
    "subject": "Organic Chemistry I",
    "topic": "Oxidative cleavage: retain both fragments",
    "title": "Oxidative cleavage: retain both fragments",
    "prompt": "Treat 2-methylpent-2-ene with 1) O3 2) Zn/H2O. Draw the two carbonyl fragments separately: A from the alkene carbon with two methyl groups, B from the alkene carbon bearing H. Explain why B is not a carboxylic acid under this workup.",
    "reactant": "CC(C)=CCC",
    "reactantLabel": "Starting material: CC(C)=CCC",
    "products": [
      {
        "label": "Fragment A",
        "smiles": "CC(=O)C",
        "stereo": false
      },
      {
        "label": "Fragment B",
        "smiles": "CCC=O",
        "stereo": false
      }
    ],
    "kind": "molecule",
    "hub": "reactions",
    "subtopic": "Oxidative cleavage: retain both fragments",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "reactions / Oxidative cleavage: retain both fragments",
    "units": "",
    "objective": "Oxidative cleavage: retain both fragments",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "Replace each end of the cleaved C=C with C=O.",
    "setup": "Account for all six starting carbons across the two fragments.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "A is acetone (propan-2-one); B is propanal.\nEach original alkene carbon becomes a carbonyl carbon, retaining its other substituents. Three carbons appear in each fragment.\nThe reducing workup preserves the aldehyde; an oxidative workup can oxidize an aldehyde further.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-12",
    "subject": "Organic Chemistry I",
    "topic": "Synthesis checkpoint: alcohol to alkene to alkane",
    "title": "Synthesis checkpoint: alcohol to alkene to alkane",
    "prompt": "Heat 2-methylbutan-2-ol with acid and isolate the major alkene A. Hydrogenate A with excess H2/Pd to obtain B. Draw both products and explain why A is favored over the terminal alkene.",
    "reactant": "CC(O)(C)CC",
    "reactantLabel": "Starting material: CC(O)(C)CC",
    "products": [
      {
        "label": "Major alkene A",
        "smiles": "CC(C)=CC",
        "stereo": false
      },
      {
        "label": "Hydrogenation B",
        "smiles": "CC(C)CC",
        "stereo": false
      }
    ],
    "kind": "molecule",
    "hub": "reactions",
    "subtopic": "Synthesis checkpoint: alcohol to alkene to alkane",
    "difficulty": "Integration",
    "type": "Structure drawing",
    "minutes": 12,
    "source": "Original authored challenge inspired by the topic breadth of supplied ACS practice and Organic Chemistry Q6; no exam questions reproduced. Concept reference: https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "reactions / Synthesis checkpoint: alcohol to alkene to alkane",
    "units": "",
    "objective": "Synthesis checkpoint: alcohol to alkene to alkane",
    "diagram": "",
    "answer": [],
    "clarify": "Draw each labeled product separately. Retain every carbon unless the stated reaction cleaves a bond. Use the reasoning field to explain selectivity. Structure checking grades molecular connectivity and only the explicitly specified stereochemistry.",
    "hint": "Acid-catalyzed dehydration of a tertiary alcohol generally favors the more substituted alkene.",
    "setup": "Locate beta hydrogens adjacent to the OH-bearing carbon; then remove the remaining pi bond in the second step.",
    "calculate": "Count carbons, check ordinary valences and account for each reagent equivalent. Compare the requested intermediate with the final isolated product. Check your explanation separately from the drawing.",
    "solution": "A is 2-methylbut-2-ene, the more substituted Zaitsev alkene. B is 2-methylbutane.\nProtonation turns OH into a better leaving group; water loss and beta deprotonation produce the alkene.\nHydrogenation adds H across C=C without moving the methyl branch. A has two identical methyl groups at one alkene carbon, so E/Z is not defined.",
    "rubric": [
      "Account for reagent equivalents and all carbon atoms.",
      "Explain the regioselectivity or stereoselectivity using the stated conditions.",
      "Distinguish the intermediate from the isolated product; check valence."
    ]
  },
  {
    "id": "v5-chem-13",
    "subject": "Organic Chemistry I",
    "topic": "Aromaticity after protonation",
    "title": "Aromaticity after protonation",
    "prompt": "Compare pyridine, pyridinium and pyrrole: state the aromatic pi-electron count for each. Identify which lone pair participates in aromaticity and explain why pyridine is more basic than pyrrole. Draw supporting structures in the scratch workspace.",
    "kind": "rubric",
    "hub": "resonance",
    "subtopic": "Aromaticity after protonation",
    "difficulty": "Integration",
    "type": "Mechanism analysis",
    "minutes": 12,
    "source": "Original challenge informed by topics in supplied Q6 and ACS practice. General reference: OpenStax Organic Chemistry, conjugation, stereochemistry and substitution chapters.",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "resonance / Aromaticity after protonation",
    "units": "",
    "objective": "Aromaticity after protonation",
    "diagram": "",
    "answer": [],
    "clarify": "Give a connected explanation and supporting structures. This reasoning task uses an explicit self-assessment rubric; its prose is not automatically graded.",
    "hint": "Distinguish an in-plane lone pair from a lone pair in a p orbital.",
    "setup": "Identify the relevant orbitals or intermediate, then connect structure to the stated observation. Separate mechanism, stereochemistry and kinetics.",
    "calculate": "Check electron counts, charges and carbon connectivity. Test your explanation against each part of the question.",
    "solution": "Pyridine and pyridinium each retain six aromatic pi electrons. Pyridine’s in-plane nitrogen lone pair is outside the pi sextet, so its protonation does not remove aromaticity. Pyrrole has four pi electrons from two double bonds plus two from the nitrogen lone pair. Protonating that nitrogen disrupts its aromatic contribution, making pyrrole much less basic.",
    "rubric": [
      "Count ring pi electrons, not all lone pairs.",
      "Distinguish the pyridine and pyrrole nitrogen orbitals.",
      "Connect basicity to stabilization of the conjugate acid."
    ]
  },
  {
    "id": "v5-chem-14",
    "subject": "Organic Chemistry I",
    "topic": "Kinetic and thermodynamic diene products",
    "title": "Kinetic and thermodynamic diene products",
    "prompt": "HBr adds to buta-1,3-diene. Explain how an allylic intermediate permits 1,2 and 1,4 addition. Draw both constitutional products, label the kinetic and thermodynamic products in your written answer, and explain how temperature and reversibility affect their proportions. Ignore E/Z in the drawings.",
    "kind": "rubric",
    "hub": "reactions",
    "subtopic": "Kinetic and thermodynamic diene products",
    "difficulty": "Integration",
    "type": "Mechanism analysis",
    "minutes": 12,
    "source": "Original challenge informed by topics in supplied Q6 and ACS practice. General reference: OpenStax Organic Chemistry, conjugation, stereochemistry and substitution chapters.",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "reactions / Kinetic and thermodynamic diene products",
    "units": "",
    "objective": "Kinetic and thermodynamic diene products",
    "diagram": "",
    "answer": [],
    "clarify": "Give a connected explanation and supporting structures. This reasoning task uses an explicit self-assessment rubric; its prose is not automatically graded.",
    "hint": "The fastest path need not lead to the lowest-energy alkene.",
    "setup": "Identify the relevant orbitals or intermediate, then connect structure to the stated observation. Separate mechanism, stereochemistry and kinetics.",
    "calculate": "Check electron counts, charges and carbon connectivity. Test your explanation against each part of the question.",
    "solution": "The 1,2 product is 3-bromobut-1-ene; the 1,4 product is 1-bromobut-2-ene. In the usual introductory model, low temperature favors faster 1,2 capture (kinetic control); higher temperature with reversible equilibration favors the more substituted 1,4 alkene (thermodynamic control). Exact proportions depend on conditions.",
    "rubric": [
      "Show resonance-delocalized allylic cation positions.",
      "Identify both constitutional products correctly.",
      "Separate activation barrier from product stability and mention reversibility."
    ]
  },
  {
    "id": "v5-chem-15",
    "subject": "Organic Chemistry I",
    "topic": "Bromination stereochemistry audit",
    "title": "Bromination stereochemistry audit",
    "prompt": "Compare Br2 addition to (E)-but-2-ene and (Z)-but-2-ene in an inert solvent. Predict whether each gives a meso compound or a racemic mixture, assign the product configurations, and justify the result using bromonium-ion opening. Use the scratch workspace for a representative structure.",
    "kind": "rubric",
    "hub": "stereo",
    "subtopic": "Bromination stereochemistry audit",
    "difficulty": "Integration",
    "type": "Mechanism analysis",
    "minutes": 12,
    "source": "Original challenge informed by topics in supplied Q6 and ACS practice. General reference: OpenStax Organic Chemistry, conjugation, stereochemistry and substitution chapters.",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "stereo / Bromination stereochemistry audit",
    "units": "",
    "objective": "Bromination stereochemistry audit",
    "diagram": "",
    "answer": [],
    "clarify": "Give a connected explanation and supporting structures. This reasoning task uses an explicit self-assessment rubric; its prose is not automatically graded.",
    "hint": "Both reactions are anti addition; the starting alkene geometry changes the product relationship.",
    "setup": "Identify the relevant orbitals or intermediate, then connect structure to the stated observation. Separate mechanism, stereochemistry and kinetics.",
    "calculate": "Check electron counts, charges and carbon connectivity. Test your explanation against each part of the question.",
    "solution": "The E alkene gives meso (2R,3S)-2,3-dibromobutane (equivalently 2S,3R). The Z alkene gives a racemic pair, (2R,3R) and (2S,3S). Backside opening of a bridged bromonium ion makes the addition anti; examine symmetry after drawing the product, not merely whether it contains stereocenters.",
    "rubric": [
      "Use anti addition for both substrates.",
      "Identify meso versus racemic outcomes.",
      "Assign configurations and discuss the internal symmetry of the meso product."
    ]
  },
  {
    "id": "v5-chem-16",
    "subject": "Organic Chemistry I",
    "topic": "SN1 evidence and competing elimination",
    "title": "SN1 evidence and competing elimination",
    "prompt": "A tertiary alkyl bromide solvolyzes in aqueous ethanol. Doubling substrate concentration doubles the initial rate, but doubling solvent nucleophile concentration at fixed medium has negligible effect. Identify the rate-determining event, write a rate law, explain why SN2 is disfavored, and predict how heating affects competing E1 elimination.",
    "kind": "rubric",
    "hub": "substitution",
    "subtopic": "SN1 evidence and competing elimination",
    "difficulty": "Integration",
    "type": "Mechanism analysis",
    "minutes": 12,
    "source": "Original challenge informed by topics in supplied Q6 and ACS practice. General reference: OpenStax Organic Chemistry, conjugation, stereochemistry and substitution chapters.",
    "sourceTag": "Molecule Lab · original integration practice",
    "topicScope": "substitution / SN1 evidence and competing elimination",
    "units": "",
    "objective": "SN1 evidence and competing elimination",
    "diagram": "",
    "answer": [],
    "clarify": "Give a connected explanation and supporting structures. This reasoning task uses an explicit self-assessment rubric; its prose is not automatically graded.",
    "hint": "Use the experimental rate dependence before naming a mechanism.",
    "setup": "Identify the relevant orbitals or intermediate, then connect structure to the stated observation. Separate mechanism, stereochemistry and kinetics.",
    "calculate": "Check electron counts, charges and carbon connectivity. Test your explanation against each part of the question.",
    "solution": "Rate = k[tertiary alkyl bromide] is consistent with unimolecular ionization to a carbocation in the slow step. Water/ethanol then traps the cation. Steric hindrance strongly disfavors backside SN2 attack at a tertiary center. E1 shares the carbocation intermediate; heating generally increases the relative importance of elimination. These observations support the mechanism but are not a complete mechanistic proof.",
    "rubric": [
      "Infer first-order substrate dependence.",
      "Identify ionization and carbocation trapping.",
      "Explain steric suppression of SN2 and competition from E1."
    ]
  }
]);

/* Extend existing reasoning tasks without changing their accepted answers or IDs. */
for (const p of bank) {
  if (p.title === "Hydroboration product") { p.prompt += " Explain the regioselectivity, contrast it with acid-catalyzed hydration, and sketch the two alcohol connectivities in the molecule workspace. Enter only the requested major alcohol name in the answer field."; p.reactant="C=CC"; p.reactantLabel="Propene"; }
  if (p.title === "Lindlar reduction") { p.prompt += " Draw the product in the workspace and explain syn addition, E/Z assignment and how an unpoisoned catalyst would change the outcome. Enter cis-but-2-ene or trans-but-2-ene in the answer field."; p.reactant="CC#CC"; p.reactantLabel="But-2-yne"; }
  if (p.title === "Ozonolysis connectivity") { p.prompt += " Sketch the product, account for both fragments and explain why an oxidative workup would alter the result. Enter the carbonyl product name in the answer field."; p.reactant="CC=CC"; p.reactantLabel="But-2-ene (geometry does not affect this product)"; }
}
