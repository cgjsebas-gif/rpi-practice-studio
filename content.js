const hubs=[
  {
    "id": "functions",
    "course": "Calculus I",
    "unit": "0 · Function toolkit",
    "title": "Functions, exponentials and logarithms",
    "source": "calc",
    "overview": "Check the domain and the meaning of a function before differentiating or integrating it.",
    "detail": "Composition feeds one output into another input. An inverse reverses a one-to-one function, often after restricting its domain. Exponentials turn addition into multiplication; logarithms reverse that relationship. The real logarithm requires a positive argument. Trigonometric inverse functions use restricted ranges.",
    "equation": "ln(ab)=ln a+ln b; ln(aʳ)=r ln a; d(eˣ)/dx=eˣ; d(ln x)/dx=1/x",
    "variables": "a,b>0; x>0 for real ln x. Trigonometric inputs are radians in calculus rules.",
    "assumptions": "Do not confuse inverse functions with reciprocals. State any domain restriction.",
    "application": "Domains prevent impossible or undefined operations in later calculations.",
    "prereqs": [],
    "objectives": [
      "Find domains",
      "Manipulate logarithms",
      "Use elementary exponential derivatives"
    ],
    "mistakes": [
      "Taking ln of a sum termwise",
      "Ignoring domain restrictions",
      "Confusing sin⁻¹x with 1/sin x"
    ],
    "terms": [
      "Domain: allowed inputs",
      "Inverse: function reversing another",
      "Natural logarithm: inverse of eˣ"
    ],
    "problems": [
      "v2-109",
      "v2-110",
      "v2-111",
      "v2-112"
    ],
    "examples": [
      "v2-109",
      "v2-110"
    ],
    "next": []
  },
  {
    "id": "limits",
    "course": "Calculus I",
    "unit": "1 · Local behavior",
    "title": "Limits",
    "source": "calc",
    "overview": "A limit describes where a function is heading near an input, even if its value at that input is missing.",
    "detail": "Evaluate nearby behavior from both sides. Direct substitution works for continuous expressions; an indeterminate form such as 0/0 is a signal to rewrite, not an answer. Factor, rationalize, or use an established limit before substituting. Infinite limits describe unbounded behavior; they are not finite numbers.",
    "equation": "limₓ→ₐ f(x) = L ⇔ left and right limits both equal L",
    "variables": "x: input; a: approach value; L: limiting output. Output units are those of f.",
    "assumptions": "A two-sided finite limit requires agreement of both one-sided limits. sin(u)/u → 1 assumes radians.",
    "application": "Limits underpin local rates in transport and continuity of engineering models.",
    "prereqs": [],
    "objectives": [
      "Evaluate removable forms",
      "Compare one-sided limits",
      "Recognize unbounded behavior"
    ],
    "mistakes": [
      "Canceling across addition",
      "Treating 0/0 as zero",
      "Confusing f(a) with its limit"
    ],
    "terms": [
      "Limit: nearby trend",
      "One-sided limit: approach from a specified side",
      "Indeterminate form: expression requiring more analysis"
    ],
    "problems": [
      "q6",
      "q7",
      "v2-1",
      "v2-2",
      "v2-3",
      "v2-4"
    ],
    "examples": [
      "q6",
      "q7"
    ],
    "next": [
      "continuity",
      "derivatives",
      "integration"
    ]
  },
  {
    "id": "continuity",
    "course": "Calculus I",
    "unit": "1 · Local behavior",
    "title": "Continuity",
    "source": "calc",
    "overview": "Continuity connects the value of a function to its nearby behavior.",
    "detail": "At a point a, ask three separate questions: is f(a) defined, does the two-sided limit exist, and are they equal? A removable gap can be repaired by assigning the limiting value. A jump cannot be repaired by changing only one point. On a closed interval, check one-sided continuity at the endpoints.",
    "equation": "f is continuous at a when limₓ→ₐ f(x) = f(a)",
    "variables": "a: input being tested; f(a): actual function value.",
    "assumptions": "The function must be defined at a. For piecewise rules, match the correct left and right branches.",
    "application": "A property correlation should not introduce an artificial jump at a change in its fitted formula.",
    "prereqs": [
      "limits"
    ],
    "objectives": [
      "Test all three conditions",
      "Solve piecewise matching conditions",
      "Distinguish jumps from holes"
    ],
    "mistakes": [
      "Only checking the function value",
      "Ignoring the branch domain",
      "Calling every discontinuity removable"
    ],
    "terms": [
      "Continuity: limit equals value",
      "Jump: unequal finite one-sided limits",
      "Removable gap: existing limit but missing or different value"
    ],
    "problems": [
      "q2",
      "q3",
      "v2-5",
      "v2-6",
      "v2-7",
      "v2-8"
    ],
    "examples": [
      "q2",
      "q3"
    ],
    "next": [
      "derivatives",
      "approximation"
    ]
  },
  {
    "id": "derivatives",
    "course": "Calculus I",
    "unit": "2 · Rates of change",
    "title": "Derivatives",
    "source": "calc",
    "overview": "A derivative measures the local rate at which one quantity responds to another.",
    "detail": "The derivative is the limit of a difference quotient. Products need a product rule because both factors may change; compositions need a chain rule because the inner variable also changes. Differentiate symbolically before evaluating. Units are output units divided by input units.",
    "equation": "f′(x) = limₕ→₀ [f(x+h)−f(x)]/h; (uv)′ = u′v + uv′; (f∘g)′ = f′(g)g′",
    "variables": "h: increment; u,v: differentiable factors; g: inner function.",
    "assumptions": "Differentiability requires a finite matching local slope. Standard trig derivative rules use radians.",
    "application": "The slope of concentration versus time is a reaction rate, and the slope of a property correlation describes sensitivity.",
    "prereqs": [
      "limits",
      "continuity"
    ],
    "objectives": [
      "Apply product and chain rules",
      "Interpret derivative units",
      "Differentiate before evaluating"
    ],
    "mistakes": [
      "Forgetting the inner derivative",
      "Multiplying the derivatives of factors",
      "Treating a slope as a function value"
    ],
    "terms": [
      "Derivative: local slope",
      "Chain rule: derivative of a composition",
      "Sensitivity: change in output per input change"
    ],
    "problems": [
      "q0",
      "q1",
      "v2-9",
      "v2-10",
      "v2-11",
      "v2-12"
    ],
    "examples": [
      "q0",
      "q1"
    ],
    "next": [
      "critical",
      "related",
      "kinematics",
      "energy",
      "approximation",
      "integration"
    ]
  },
  {
    "id": "critical",
    "course": "Calculus I",
    "unit": "3 · Analyze and optimize",
    "title": "Critical points",
    "source": "calc",
    "overview": "Critical numbers identify candidates for local extrema; they do not guarantee an extremum.",
    "detail": "Find domain points where f′ is zero or undefined. Use a derivative sign chart or, when applicable, the second derivative test to classify them. For absolute extrema on a closed interval, compare function values at all interior candidates and both endpoints.",
    "equation": "Critical candidate: f′(c)=0 or f′(c) undefined, with c in the domain",
    "variables": "c: candidate input. f″ measures how the first derivative changes.",
    "assumptions": "The second derivative test is inconclusive when f″(c)=0. Endpoints matter for absolute optimization.",
    "application": "Optimization may locate a cost minimum or a maximum yield in a simplified model, subject to physical constraints.",
    "prereqs": [
      "derivatives"
    ],
    "objectives": [
      "Locate domain-valid candidates",
      "Classify with a sign chart",
      "Check endpoint values"
    ],
    "mistakes": [
      "Calling every stationary point a minimum",
      "Forgetting endpoints",
      "Including points outside the domain"
    ],
    "terms": [
      "Critical number: domain input with zero or missing derivative",
      "Stationary point: zero derivative",
      "Inflection: change in concavity"
    ],
    "problems": [
      "q4",
      "q5",
      "v2-13",
      "v2-14",
      "v2-15",
      "v2-16"
    ],
    "examples": [
      "q4",
      "q5"
    ],
    "next": []
  },
  {
    "id": "related",
    "course": "Calculus I",
    "unit": "3 · Analyze and optimize",
    "title": "Related rates",
    "source": "calc",
    "overview": "Related-rates problems connect changes in quantities constrained by geometry or a physical relation.",
    "detail": "Draw the instantaneous geometry, define time-dependent variables, and write one relation valid throughout the motion. Differentiate with respect to time before inserting the requested instant. A fixed total length is constant, but the changing component lengths are functions of time.",
    "equation": "For F(x,y)=0: Fₓ dx/dt + Fᵧ dy/dt = 0",
    "variables": "x,y: changing quantities; t: time; dx/dt,dy/dt: signed rates.",
    "assumptions": "The constraint must remain valid as the system evolves. Specify units and positive directions.",
    "application": "A changing liquid level is linked to a changing tank volume through geometry.",
    "prereqs": [
      "derivatives"
    ],
    "objectives": [
      "Build a geometric constraint",
      "Differentiate implicitly in time",
      "Interpret signed rates"
    ],
    "mistakes": [
      "Substituting the instant before differentiating",
      "Treating a changing variable as fixed",
      "Dropping units or signs"
    ],
    "terms": [
      "Related rates: linked time derivatives",
      "Constraint: relation maintained during change",
      "Instantaneous: at one specified moment"
    ],
    "problems": [
      "q8",
      "q9",
      "v2-17",
      "v2-18",
      "v2-19",
      "v2-20"
    ],
    "examples": [
      "q8",
      "q9"
    ],
    "next": []
  },
  {
    "id": "approximation",
    "course": "Calculus I",
    "unit": "3 · Analyze and optimize",
    "title": "Approximation and mean value theorem",
    "source": "approx",
    "overview": "A tangent line provides a local estimate; a theorem can connect an average rate to an instantaneous one.",
    "detail": "Linearization uses the function value and slope at a nearby known point. Concavity helps determine whether the tangent estimate is above or below the function. The Mean Value Theorem guarantees a matching slope only with continuity on the closed interval and differentiability in its interior.",
    "equation": "L(x)=f(a)+f′(a)(x−a); f′(c)=[f(b)−f(a)]/(b−a)",
    "variables": "a: expansion point; c lies in (a,b). Differential dy=f′(a)dx approximates a small output change.",
    "assumptions": "Linearization is local. MVT requires its hypotheses, not merely defined endpoint values.",
    "application": "Approximation estimates sensitivities and numerical changes.",
    "prereqs": [
      "derivatives",
      "continuity"
    ],
    "objectives": [
      "Build a tangent estimate",
      "Check theorem hypotheses",
      "Find a mean-value point"
    ],
    "mistakes": [
      "Treating approximation as exact",
      "Ignoring a corner in MVT",
      "Confusing average and instantaneous rates"
    ],
    "terms": [
      "Linearization: tangent-line approximation",
      "Concavity: direction of slope change",
      "Mean value theorem: existence of an average-slope point"
    ],
    "problems": [
      "v2-113",
      "v2-114",
      "v2-115",
      "v2-116"
    ],
    "examples": [
      "v2-113",
      "v2-114"
    ],
    "next": []
  },
  {
    "id": "integration",
    "course": "Calculus I",
    "unit": "4 · Accumulation",
    "title": "Integrals, substitution and the FTC",
    "source": "integration",
    "overview": "Integration adds small contributions; differentiation measures local change. The FTC connects them.",
    "detail": "A definite integral gives signed accumulation. An antiderivative evaluates it through endpoint subtraction. For a composed integrand, substitution changes variables consistently, including the differential and bounds. An indefinite integral describes a family and needs a constant. Reversing definite-integral bounds changes the sign.",
    "equation": "∫ₐᵇ f(x)dx=F(b)−F(a), F′=f; d/dx ∫ₐˣ f(t)dt=f(x)",
    "variables": "dx denotes integration with respect to x. Integral units are integrand units multiplied by input units.",
    "assumptions": "The simple FTC statement here assumes a continuous integrand. Apply the chain rule when the upper bound is a function of x.",
    "application": "Accumulated displacement comes from integrating velocity.",
    "prereqs": [
      "derivatives",
      "limits"
    ],
    "objectives": [
      "Evaluate definite integrals",
      "Apply FTC and substitution",
      "Distinguish net accumulation from total amount"
    ],
    "mistakes": [
      "Omitting +C in indefinite integrals",
      "Mixing old bounds with a new variable",
      "Using signed area as total area"
    ],
    "terms": [
      "Antiderivative: function with the required derivative",
      "Definite integral: signed accumulation",
      "Substitution: change of integration variable"
    ],
    "problems": [
      "v2-117",
      "v2-118",
      "v2-119",
      "v2-120",
      "v2-121",
      "v2-122"
    ],
    "examples": [
      "v2-117",
      "v2-118"
    ],
    "next": [
      "integral-apps"
    ]
  },
  {
    "id": "integral-apps",
    "course": "Calculus I",
    "unit": "5 · Integral applications",
    "title": "Area, volume and net change",
    "source": "applications",
    "overview": "Choose the small quantity being added before writing an integral.",
    "detail": "Area between curves uses top minus bottom, splitting where they cross. Disk and washer volumes add cross-sectional areas along an axis. Net displacement integrates velocity; total distance integrates speed. The average value of a function is its integral divided by the interval length.",
    "equation": "Area=∫(top−bottom)dx; V=π∫(R²−r²)dx; favg=(1/(b−a))∫ₐᵇ f(x)dx",
    "variables": "R,r: outer and inner radii; V has cubic-length units; area has squared-length units.",
    "assumptions": "Draw the region and choose slices perpendicular to the rotation axis for washers. Radii are distances, hence nonnegative.",
    "application": "Geometric accumulation connects a drawing to a computable quantity.",
    "prereqs": [
      "integration"
    ],
    "objectives": [
      "Set up an area integral",
      "Compute a simple volume",
      "Separate distance and displacement"
    ],
    "mistakes": [
      "Integrating lower minus upper",
      "Squaring a difference instead of subtracting squares",
      "Ignoring velocity sign changes"
    ],
    "terms": [
      "Washer: circular cross-section with a hole",
      "Net change: signed accumulation",
      "Average value: accumulation divided by interval length"
    ],
    "problems": [
      "v2-123",
      "v2-124",
      "v2-125",
      "v2-126"
    ],
    "examples": [
      "v2-123",
      "v2-124"
    ],
    "next": []
  },
  {
    "id": "measurement",
    "course": "Physics I",
    "unit": "0 · Quantities and measurement",
    "title": "Units, precision and estimation",
    "source": "measurement",
    "overview": "A numerical result needs a physical quantity, unit and appropriate precision.",
    "detail": "Convert units with ratios equal to one. Dimensional consistency is necessary but does not prove an equation correct. For addition, round to the least precise decimal place; for multiplication, use the limiting significant figures under the usual introductory rules. Keep guard digits until the final step.",
    "equation": "1 km=1000 m; 1 h=3600 s; [F]=M L T⁻²",
    "variables": "M,L,T denote mass, length and time dimensions, not particular units.",
    "assumptions": "Counted quantities and defined conversion factors are exact. Significant-figure rules approximate uncertainty, not a complete statistical model.",
    "application": "Estimation can reveal a unit conversion error before a long calculation.",
    "prereqs": [],
    "objectives": [
      "Convert compatible units",
      "Track dimensions",
      "Report justified precision"
    ],
    "mistakes": [
      "Rounding every intermediate result",
      "Confusing decimal places with significant figures",
      "Treating dimensional agreement as proof"
    ],
    "terms": [
      "Dimension: kind of physical quantity",
      "Significant figures: reported precision",
      "Order of magnitude: approximate power-of-ten scale"
    ],
    "problems": [
      "v2-127",
      "v2-128",
      "v2-129",
      "v2-130"
    ],
    "examples": [
      "v2-127",
      "v2-128"
    ],
    "next": []
  },
  {
    "id": "vectors",
    "course": "Physics I",
    "unit": "1 · Motion and forces",
    "title": "Vectors and components",
    "source": "original",
    "overview": "A vector needs both magnitude and direction. Components make two-dimensional calculations manageable.",
    "detail": "Choose axes first. Add vectors component by component; only then calculate magnitude and direction. A dot product measures alignment and gives a scalar. A cross product is perpendicular to its inputs and uses the right-hand rule. The angle in a force or torque problem is the angle between the relevant vectors.",
    "equation": "Aₓ=A cosθ; Aᵧ=A sinθ; |A|=√(Aₓ²+Aᵧ²); A·B=AₓBₓ+AᵧBᵧ",
    "variables": "A: vector; θ: angle from +x; components have the same units as A.",
    "assumptions": "Component equations shown are for Cartesian axes; use atan2 to preserve the direction quadrant.",
    "application": "Force, velocity and flux directions matter in pipes and equipment loads.",
    "prereqs": [],
    "objectives": [
      "Resolve vectors",
      "Add components",
      "Use dot and cross products"
    ],
    "mistakes": [
      "Adding magnitudes instead of components",
      "Losing a quadrant",
      "Using the wrong reference angle"
    ],
    "terms": [
      "Scalar: magnitude only",
      "Vector: magnitude and direction",
      "Dot product: scalar measure of alignment"
    ],
    "problems": [
      "v2-21",
      "v2-22",
      "v2-23",
      "v2-24"
    ],
    "examples": [
      "v2-21",
      "v2-22"
    ],
    "next": [
      "kinematics",
      "forces",
      "momentum"
    ]
  },
  {
    "id": "kinematics",
    "course": "Physics I",
    "unit": "1 · Motion and forces",
    "title": "Kinematics",
    "source": "original",
    "overview": "Kinematics describes motion without first asking what force caused it.",
    "detail": "Velocity is the slope of position versus time; acceleration is the slope of velocity versus time. Displacement is signed area under a velocity-time curve. Under constant acceleration, algebraic motion equations follow by integration. For projectiles, horizontal and vertical components share the same time but have different accelerations.",
    "equation": "v=v₀+at; Δx=v₀t+½at²; v²=v₀²+2aΔx",
    "variables": "x in m; v in m/s; a in m/s²; t in s. For free flight: aᵧ=−g with upward positive.",
    "assumptions": "These algebraic formulas require constant acceleration. Projectile examples neglect drag and use stated g.",
    "application": "Particle trajectories provide a starting model for droplets and solids transport.",
    "prereqs": [
      "vectors",
      "derivatives"
    ],
    "objectives": [
      "Read motion graphs",
      "Choose a constant-acceleration equation",
      "Separate projectile components"
    ],
    "mistakes": [
      "Confusing distance with displacement",
      "Setting acceleration to zero at a turning point",
      "Using different flight times in x and y"
    ],
    "terms": [
      "Velocity: rate of displacement",
      "Acceleration: rate of velocity",
      "Displacement: signed position change"
    ],
    "problems": [
      "q12",
      "q13",
      "v2-25",
      "v2-26",
      "v2-27"
    ],
    "examples": [
      "q12",
      "q13"
    ],
    "next": [
      "forces"
    ]
  },
  {
    "id": "forces",
    "course": "Physics I",
    "unit": "1 · Motion and forces",
    "title": "Forces and free-body diagrams",
    "source": "original",
    "overview": "A free-body diagram isolates one object and shows the external forces acting on it.",
    "detail": "Apply Newton’s second law separately along chosen axes. Normal force is not automatically mg; it depends on geometry and acceleration. Static friction adjusts up to its limit, whereas the simple sliding model uses kinetic friction. Third-law pairs act on different objects and cannot cancel on a single object’s diagram.",
    "equation": "ΣF=ma; fₖ=μₖN; |fₛ|≤μₛN",
    "variables": "F,N,f in N; m in kg; a in m/s²; μ is dimensionless.",
    "assumptions": "Use an inertial frame and constant mass. Ideal ropes are massless; an ideal pulley has no rotational inertia or friction when explicitly stated.",
    "application": "Supports, suspended equipment and particle motion all require a clear force balance.",
    "prereqs": [
      "vectors",
      "kinematics"
    ],
    "objectives": [
      "Isolate a body",
      "Resolve force components",
      "Distinguish friction models"
    ],
    "mistakes": [
      "Drawing acceleration as a force",
      "Pairing weight and normal as a third-law pair",
      "Assuming equal tension across a massive pulley"
    ],
    "terms": [
      "Normal force: perpendicular contact force",
      "Tension: pulling force in a taut connector",
      "Friction: tangential contact interaction"
    ],
    "problems": [
      "q10",
      "q11",
      "v2-28",
      "v2-29",
      "v2-30",
      "v2-31"
    ],
    "examples": [
      "q10",
      "q11"
    ],
    "next": [
      "circular",
      "energy",
      "momentum",
      "torque",
      "fluids"
    ]
  },
  {
    "id": "circular",
    "course": "Physics I",
    "unit": "1 · Motion and forces",
    "title": "Circular motion",
    "source": "original",
    "overview": "Even at constant speed, an object moving in a circle accelerates because its velocity changes direction.",
    "detail": "The inward acceleration must be supplied by the inward component of actual forces. “Centripetal force” names the required net force, not an additional force to draw. At changing speed there is also tangential acceleration. At the top of a vertical circle, gravity and tension may both point inward.",
    "equation": "aᵣ=v²/r=ω²r; ΣFᵣ=mv²/r; v=2πr/T",
    "variables": "r in m; v in m/s; ω in rad/s; period T in s.",
    "assumptions": "Use inward as the positive radial direction at each point. Uniform circular motion has zero tangential acceleration, not zero total acceleration.",
    "application": "Centrifuges and rotating machinery require separating radial from tangential motion.",
    "prereqs": [
      "forces"
    ],
    "objectives": [
      "Identify inward acceleration",
      "Use actual forces radially",
      "Relate speed and period"
    ],
    "mistakes": [
      "Adding a new centripetal-force arrow",
      "Assuming constant velocity",
      "Choosing the same radial direction everywhere"
    ],
    "terms": [
      "Centripetal: directed toward the center",
      "Period: time per revolution",
      "Tangential acceleration: change of speed"
    ],
    "problems": [
      "v2-32",
      "v2-33",
      "v2-34",
      "v2-35"
    ],
    "examples": [
      "v2-32",
      "v2-33"
    ],
    "next": [
      "rotation",
      "gravitation"
    ]
  },
  {
    "id": "energy",
    "course": "Physics I",
    "unit": "2 · Conservation laws",
    "title": "Work, energy and springs",
    "source": "original",
    "overview": "Work transfers energy; a force parallel to displacement does positive work and an opposing force does negative work.",
    "detail": "Net work changes kinetic energy. Conservative forces can instead be represented by potential-energy changes, with Wcons=−ΔU. Friction transforms mechanical energy into other forms; it does not destroy total energy. Choose a reference for gravitational potential consistently. A potential-energy graph gives force from its negative slope.",
    "equation": "Wnet=ΔK; K=½mv²; Ug=mgy; Us=½kx²; Fₓ=−dU/dx",
    "variables": "W,K,U in J; k in N/m; spring displacement x in m; g in m/s².",
    "assumptions": "mgy assumes approximately uniform gravity; ½kx² assumes a Hookean spring. Mechanical energy is conserved only if relevant nonconservative work is zero.",
    "application": "Energy accounting connects mechanics to heat and process-energy balances.",
    "prereqs": [
      "forces",
      "derivatives"
    ],
    "objectives": [
      "Calculate work",
      "Include spring and gravity energy",
      "Interpret a potential-energy slope"
    ],
    "mistakes": [
      "Using kx instead of ½kx² as energy",
      "Dropping nonconservative work",
      "Confusing total with mechanical energy"
    ],
    "terms": [
      "Work: force integrated over displacement",
      "Conservative force: path-independent work",
      "Potential energy: configuration-dependent energy"
    ],
    "problems": [
      "q14",
      "v2-36",
      "v2-37",
      "v2-38",
      "v2-39"
    ],
    "examples": [
      "q14",
      "v2-36"
    ],
    "next": [
      "rotation",
      "gravitation",
      "oscillations",
      "fluids"
    ]
  },
  {
    "id": "momentum",
    "course": "Physics I",
    "unit": "2 · Conservation laws",
    "title": "Impulse and collisions",
    "source": "original",
    "overview": "Momentum conservation is useful during a brief collision when external impulse is negligible.",
    "detail": "Impulse is signed area under force versus time and changes momentum. Select the entire interacting system so its internal forces cancel in the total balance. In elastic collisions kinetic energy is also conserved; sticking collisions are perfectly inelastic and generally lose kinetic energy. Momentum is a vector.",
    "equation": "p=mv; J=∫F dt=Δp; Σpinitial=Σpfinal when Jexternal≈0",
    "variables": "p,J in kg·m/s or N·s; m in kg; v in m/s.",
    "assumptions": "Conserve momentum only along directions with negligible external impulse. Sticking objects share one final velocity.",
    "application": "Impacts and fluid momentum balances start from the same change-of-momentum principle.",
    "prereqs": [
      "vectors",
      "forces"
    ],
    "objectives": [
      "Use force-time area",
      "Choose a collision system",
      "Distinguish elastic from inelastic"
    ],
    "mistakes": [
      "Conserving kinetic energy in a sticking collision",
      "Ignoring velocity signs",
      "Treating an internal force as external"
    ],
    "terms": [
      "Impulse: momentum transfer",
      "Elastic: kinetic energy conserved",
      "Perfectly inelastic: objects stick together"
    ],
    "problems": [
      "q15",
      "v2-40",
      "v2-41",
      "v2-42",
      "v2-43"
    ],
    "examples": [
      "q15",
      "v2-40"
    ],
    "next": []
  },
  {
    "id": "rotation",
    "course": "Physics I",
    "unit": "3 · Rotation",
    "title": "Rotational motion and inertia",
    "source": "original",
    "overview": "Rotation parallels linear motion, but resistance to angular acceleration depends on where the mass is located.",
    "detail": "Angular displacement, velocity and acceleration describe orientation changes. Use radians for linear-angular relations. Moment of inertia depends on the chosen axis and mass distribution. The parallel-axis theorem shifts from a parallel center-of-mass axis. Rolling without slipping combines translational and rotational kinetic energy.",
    "equation": "v=ωr; aₜ=αr; Krot=½Iω²; I=Σmr²; Iparallel=Icm+Md²",
    "variables": "θ in rad; ω in rad/s; α in rad/s²; I in kg·m²; d in m.",
    "assumptions": "For a uniform disk about its central normal axis I=½MR²; hoop I=MR²; solid sphere I=⅖MR². No-slip rolling requires vcm=ωR.",
    "application": "Rotors and mixers store energy differently depending on mass distribution.",
    "prereqs": [
      "circular",
      "energy"
    ],
    "objectives": [
      "Convert rpm to rad/s",
      "Calculate axis-dependent inertia",
      "Account for rolling energy"
    ],
    "mistakes": [
      "Using diameter as radius",
      "Omitting translational energy",
      "Applying the parallel-axis theorem from a non-CM reference"
    ],
    "terms": [
      "Moment of inertia: rotational mass-distribution factor",
      "Angular velocity: rotation rate",
      "Rolling without slip: contact point instantaneously stationary"
    ],
    "problems": [
      "v2-44",
      "v2-45",
      "v2-46",
      "v2-47",
      "v2-48"
    ],
    "examples": [
      "v2-44",
      "v2-45"
    ],
    "next": [
      "torque",
      "angular-momentum",
      "oscillations"
    ]
  },
  {
    "id": "torque",
    "course": "Physics I",
    "unit": "3 · Rotation",
    "title": "Torque and rotational dynamics",
    "source": "original",
    "overview": "Torque measures how strongly a force tends to turn an object about a chosen axis.",
    "detail": "Use the perpendicular moment arm or rF sinθ. A force through the pivot produces no torque about that pivot. For fixed-axis rigid-body dynamics, net torque gives Iα. Static equilibrium requires both zero net force and zero net torque. Massive pulleys generally require unequal tensions to accelerate.",
    "equation": "τ=rF sinθ; Στ=Iα; equilibrium: ΣF=0 and Στ=0",
    "variables": "τ in N·m; r in m; F in N; I in kg·m²; α in rad/s².",
    "assumptions": "Specify the pivot and a sign convention, such as counterclockwise positive. τ=Iα here assumes a fixed axis and constant I.",
    "application": "Shafts, levers and supports are analyzed by moments about an axis.",
    "prereqs": [
      "forces",
      "rotation"
    ],
    "objectives": [
      "Choose an efficient pivot",
      "Calculate signed torques",
      "Combine translation and rotation"
    ],
    "mistakes": [
      "Using the whole lever length as perpendicular arm",
      "Checking torque but not force equilibrium",
      "Assigning equal tension to an accelerating massive pulley"
    ],
    "terms": [
      "Moment arm: perpendicular distance to a force line",
      "Torque: turning effect",
      "Static equilibrium: zero linear and angular acceleration"
    ],
    "problems": [
      "v2-49",
      "v2-50",
      "v2-51",
      "v2-52",
      "v2-53"
    ],
    "examples": [
      "v2-49",
      "v2-50"
    ],
    "next": [
      "angular-momentum"
    ]
  },
  {
    "id": "angular-momentum",
    "course": "Physics I",
    "unit": "3 · Rotation",
    "title": "Angular momentum",
    "source": "angular",
    "overview": "Angular momentum is conserved about a chosen origin when net external torque about it is negligible.",
    "detail": "For simple rotation about a principal axis, L=Iω. Moving mass inward reduces I and can increase ω without conserving rotational kinetic energy; internal work can change that energy. For a point particle use r×p, so its distance and direction relative to the origin matter.",
    "equation": "L=Iω; L=r×p; τext=dL/dt",
    "variables": "L in kg·m²/s; τ in N·m; I in kg·m²; ω in rad/s.",
    "assumptions": "Choose one consistent origin and axis. Zero net external force alone does not guarantee zero external torque about every setup.",
    "application": "Angular momentum explains spin changes in rotating systems.",
    "prereqs": [
      "rotation",
      "torque"
    ],
    "objectives": [
      "Apply angular momentum conservation",
      "Distinguish it from energy conservation",
      "Choose an origin"
    ],
    "mistakes": [
      "Conserving ω when I changes",
      "Assuming kinetic energy stays fixed",
      "Ignoring external torque"
    ],
    "terms": [
      "Angular momentum: rotational momentum about an origin",
      "External torque: angular-momentum transfer",
      "Principal axis: axis with L parallel to ω"
    ],
    "problems": [
      "v2-131",
      "v2-132",
      "v2-133",
      "v2-134"
    ],
    "examples": [
      "v2-131",
      "v2-132"
    ],
    "next": []
  },
  {
    "id": "gravitation",
    "course": "Physics I",
    "unit": "4 · Gravitation",
    "title": "Gravity and circular orbits",
    "source": "gravity",
    "overview": "Newtonian gravity is attractive and weakens with the square of center-to-center separation.",
    "detail": "For spherical bodies outside their surfaces, the gravitational field acts as if mass were at the center. A circular orbit balances gravitational acceleration with v²/r. Gravitational potential can be zero at infinity, giving a negative bound-state potential. The surface height h must be added to planet radius to obtain r.",
    "equation": "F=GMm/r²; g=GM/r²; vcircular=√(GM/r); U=−GMm/r",
    "variables": "G is the gravitational constant; numerical questions supply G or GM. r is center-to-center distance in m.",
    "assumptions": "Newtonian model; spherical central mass; circular-orbit speed formula assumes the satellite mass is negligible relative to the central body.",
    "application": "Orbits combine circular dynamics with an inverse-square force.",
    "prereqs": [
      "circular",
      "energy"
    ],
    "objectives": [
      "Use center-to-center distance",
      "Scale inverse-square gravity",
      "Calculate a circular-orbit speed"
    ],
    "mistakes": [
      "Using altitude as orbital radius",
      "Treating orbiting as no gravity",
      "Using mgh over arbitrary large distances"
    ],
    "terms": [
      "Gravitational parameter: GM",
      "Circular orbit: constant radius trajectory",
      "Potential reference: chosen zero of energy"
    ],
    "problems": [
      "v2-135",
      "v2-136",
      "v2-137",
      "v2-138"
    ],
    "examples": [
      "v2-135",
      "v2-136"
    ],
    "next": []
  },
  {
    "id": "oscillations",
    "course": "Physics I",
    "unit": "5 · Oscillations and waves",
    "title": "Simple harmonic motion",
    "source": "oscillation",
    "overview": "A linear restoring force produces sinusoidal motion about equilibrium.",
    "detail": "In an ideal spring oscillator, acceleration opposes displacement and is proportional to it. At equilibrium speed is greatest and acceleration is zero; at a turning point the reverse holds. The small-angle pendulum has a similar equation but only within its approximation. Damping removes mechanical energy from the oscillator.",
    "equation": "x=A cos(ωt+φ); ω=√(k/m); T=2π√(m/k); a=−ω²x",
    "variables": "A,x in m; k in N/m; m in kg; ω in rad/s; T in s.",
    "assumptions": "Ideal spring, constant mass and negligible damping. Pendulum T≈2π√(ℓ/g) requires small angular displacement.",
    "application": "Periodic motion links forces, energy and phase.",
    "prereqs": [
      "energy",
      "rotation"
    ],
    "objectives": [
      "Connect phase and motion",
      "Calculate period",
      "Distinguish equilibrium from a turning point"
    ],
    "mistakes": [
      "Setting speed maximum at a turning point",
      "Confusing frequency and angular frequency",
      "Using the pendulum formula at arbitrary amplitude"
    ],
    "terms": [
      "Amplitude: maximum displacement",
      "Phase: position within a cycle",
      "Restoring force: directed toward equilibrium"
    ],
    "problems": [
      "v2-139",
      "v2-140",
      "v2-141",
      "v2-142"
    ],
    "examples": [
      "v2-139",
      "v2-140"
    ],
    "next": [
      "waves"
    ]
  },
  {
    "id": "waves",
    "course": "Physics I",
    "unit": "5 · Oscillations and waves",
    "title": "Traveling and standing waves",
    "source": "waves",
    "overview": "A wave carries a disturbance through space; medium particles need not travel along with it.",
    "detail": "Frequency counts cycles per second, wavelength is the spatial repeat distance, and their product gives wave speed. Superposition adds displacements. Standing waves arise from interference with boundary conditions that select wavelengths. A string fixed at both ends has nodes there.",
    "equation": "v=fλ; y=A sin(kx−ωt); k=2π/λ; fn=nv/(2L) for a fixed-fixed string",
    "variables": "f in Hz; λ,L in m; v in m/s; k in rad/m; ω in rad/s.",
    "assumptions": "Ideal linear waves; fixed-fixed string formula assumes uniform tension and density with small transverse displacement.",
    "application": "Boundary conditions determine normal-mode frequencies.",
    "prereqs": [
      "oscillations"
    ],
    "objectives": [
      "Relate speed, frequency and wavelength",
      "Identify travel direction",
      "Use fixed-string harmonics"
    ],
    "mistakes": [
      "Confusing wave speed with particle speed",
      "Putting antinodes at fixed ends",
      "Forgetting the second fixed end"
    ],
    "terms": [
      "Node: zero standing-wave amplitude",
      "Antinode: maximum standing-wave amplitude",
      "Wavelength: spatial period"
    ],
    "problems": [
      "v2-143",
      "v2-144",
      "v2-145",
      "v2-146"
    ],
    "examples": [
      "v2-143",
      "v2-144"
    ],
    "next": []
  },
  {
    "id": "fluids",
    "course": "Physics I",
    "unit": "6 · Fluids",
    "title": "Fluid pressure and ideal flow",
    "source": "fluids",
    "overview": "Pressure is force per area. Fluid statics and ideal flow use different balances.",
    "detail": "Hydrostatic pressure increases with depth in a uniform incompressible fluid. Buoyancy equals displaced-fluid weight. In steady incompressible flow, cross-sectional area times average speed is conserved. Bernoulli relates pressure, kinetic and elevation terms along a streamline in an ideal lossless model.",
    "equation": "ΔP=ρgΔh; FB=ρfluid gVdisplaced; A₁v₁=A₂v₂; P+½ρv²+ρgy=constant",
    "variables": "ρ in kg/m³; P in Pa; V in m³; A in m²; v in m/s.",
    "assumptions": "Bernoulli here assumes steady incompressible inviscid flow with no pumps or dissipative losses along the streamline. Distinguish gauge from absolute pressure.",
    "application": "Pressure and motion can exchange energy in the ideal model.",
    "prereqs": [
      "forces",
      "energy"
    ],
    "objectives": [
      "Calculate hydrostatic changes",
      "Use displaced volume",
      "State ideal-flow assumptions"
    ],
    "mistakes": [
      "Using object density in the buoyancy formula",
      "Ignoring elevation in Bernoulli",
      "Applying lossless flow to a highly dissipative situation"
    ],
    "terms": [
      "Pressure: normal force per area",
      "Buoyancy: net fluid-pressure force",
      "Incompressible: effectively constant density"
    ],
    "problems": [
      "v2-147",
      "v2-148",
      "v2-149",
      "v2-150"
    ],
    "examples": [
      "v2-147",
      "v2-148"
    ],
    "next": []
  },
  {
    "id": "structure",
    "course": "Organic Chemistry I",
    "unit": "1 · Molecular foundations",
    "title": "Structure, bonding and orbitals",
    "source": "original",
    "overview": "Connectivity, electrons and three-dimensional geometry determine how an organic molecule behaves.",
    "detail": "Lewis structures show valence electrons, formal charges and bonds. Skeletal notation hides carbons at line ends and vertices and the hydrogens attached to them. Electron groups determine idealized hybridization: two groups sp, three sp², four sp³. Multiple bonds count as one VSEPR region but contain one σ bond and additional π bonds. Molecular geometry excludes lone pairs when naming atom positions.",
    "equation": "Formal charge = valence electrons − nonbonding electrons − ½(bonding electrons)",
    "variables": "Formal charge is in units of elementary charge; bond angles are usually given in degrees.",
    "assumptions": "Introductory hybridization is a bonding model. Resonance can change a lone pair’s orbital description. Neutral carbon usually forms four bonds.",
    "application": "Structure controls polarity, interaction with solvents and chemical reactivity.",
    "prereqs": [],
    "objectives": [
      "Read condensed and skeletal structures",
      "Count σ and π bonds",
      "Assign formal charge and hybridization"
    ],
    "mistakes": [
      "Missing an implied carbon",
      "Confusing formal with partial charge",
      "Treating a double bond as two VSEPR regions"
    ],
    "terms": [
      "σ bond: head-on orbital overlap",
      "π bond: side-on overlap",
      "Hybridization: mixed atomic-orbital model"
    ],
    "problems": [
      "q18",
      "q19",
      "v2-54",
      "v2-55",
      "v2-56",
      "v2-57"
    ],
    "examples": [
      "q18",
      "q19"
    ],
    "next": [
      "groups",
      "acids",
      "resonance",
      "conformations",
      "stereo"
    ]
  },
  {
    "id": "groups",
    "course": "Organic Chemistry I",
    "unit": "1 · Molecular foundations",
    "title": "Functional groups and naming",
    "source": "original",
    "overview": "Recognize the local arrangement of atoms before naming a molecule or predicting its chemistry.",
    "detail": "A carbonyl attached to two carbon groups is a ketone; to hydrogen, an aldehyde; to OH, a carboxylic acid; to OR, an ester; to nitrogen, an amide. An amine lacks that carbonyl connection. For simple alcohol naming, choose the longest chain containing OH and number to give OH the lowest locant. Aromatic systems and multiple functional groups need additional naming rules.",
    "equation": "Alcohol R–OH; ether R–O–R′; ester R–C(=O)–OR′; amide R–C(=O)–NR′R″",
    "variables": "R represents a carbon-containing group, not a specific element. Locants identify atom positions.",
    "assumptions": "The shorthand describes connectivity, not a complete stereochemical structure. Naming exercises here use simple single-function molecules.",
    "application": "Functional groups guide solvent compatibility, separation choices and reaction planning.",
    "prereqs": [
      "structure"
    ],
    "objectives": [
      "Distinguish carbonyl families",
      "Recognize heteroatom groups",
      "Name simple alcohols and alkanes"
    ],
    "mistakes": [
      "Calling an ester an ether only",
      "Confusing amides with amines",
      "Ignoring the functional-group locant"
    ],
    "terms": [
      "Carbonyl: C=O unit",
      "Locant: numbered position",
      "Functional group: local structural motif with characteristic chemistry"
    ],
    "problems": [
      "q16",
      "q17",
      "v2-58",
      "v2-59",
      "v2-60",
      "v2-61"
    ],
    "examples": [
      "q16",
      "q17"
    ],
    "next": [
      "conformations",
      "spectra"
    ]
  },
  {
    "id": "acids",
    "course": "Organic Chemistry I",
    "unit": "2 · Electron flow and stability",
    "title": "Acids, bases and pKa",
    "source": "original",
    "overview": "Acid–base equilibria can often be predicted by comparing the stability of the conjugate bases.",
    "detail": "A Brønsted acid donates a proton and a base accepts one; a Lewis acid accepts an electron pair. Curved arrows start at electrons, not at positive charge. Lower pKa means stronger acid within a compatible solvent scale. Compare atom, resonance, induction and orbital effects rather than applying a rigid mnemonic without context.",
    "equation": "pH=pKa+log₁₀([A⁻]/[HA]); Keq≈10^(pKa(BH⁺)−pKa(HA))",
    "variables": "HA/A⁻: conjugate acid/base; BH⁺: conjugate acid of B; concentrations use the same units; pH and pKa are dimensionless.",
    "assumptions": "Henderson–Hasselbalch assumes the corresponding activity/concentration approximation. Compare pKa values in the same solvent. Given pKa values are problem data.",
    "application": "Acid speciation affects extraction, solubility and reaction conditions.",
    "prereqs": [
      "structure",
      "resonance"
    ],
    "objectives": [
      "Compare acid strengths",
      "Predict equilibrium direction",
      "Calculate a speciation ratio"
    ],
    "mistakes": [
      "Reversing the pKa difference",
      "Mixing solvent scales",
      "Drawing arrows from a proton instead of an electron pair"
    ],
    "terms": [
      "Conjugate base: acid after losing H⁺",
      "Nucleophile: electron-pair donor",
      "Electrophile: electron-pair acceptor"
    ],
    "problems": [
      "v2-66",
      "v2-67",
      "v2-68",
      "v2-69",
      "v2-70"
    ],
    "examples": [
      "v2-66",
      "v2-67"
    ],
    "next": [
      "reactions",
      "substitution",
      "alkynes"
    ]
  },
  {
    "id": "resonance",
    "course": "Organic Chemistry I",
    "unit": "2 · Electron flow and stability",
    "title": "Resonance and electron bookkeeping",
    "source": "original",
    "overview": "Resonance contributors describe one delocalized electronic structure; they are not rapidly interconverting molecules.",
    "detail": "Keep atom positions and the σ framework fixed while redistributing π electrons or lone pairs. Conserve total charge and electron count. Favor contributors with appropriate valence shells, less charge separation and negative charge on suitable electronegative atoms. Equivalent contributors imply equalized bonds in the hybrid. Moving a proton creates a different structure, not a resonance contributor.",
    "equation": "Σ formal charges = net molecular charge",
    "variables": "Electron-pair arrows represent two electrons; a single-barbed arrow represents one electron.",
    "assumptions": "Second-row elements must obey their allowed valence-shell capacity. Contributors can differ in formal charge placement but not net charge.",
    "application": "Delocalization explains acid strengths, carbocation stability and reactive sites.",
    "prereqs": [
      "structure"
    ],
    "objectives": [
      "Identify valid contributors",
      "Conserve electrons and charge",
      "Explain stabilization"
    ],
    "mistakes": [
      "Moving atoms during resonance",
      "Exceeding a carbon octet",
      "Treating contributors as a chemical equilibrium"
    ],
    "terms": [
      "Contributor: one Lewis representation",
      "Delocalization: electron density spread across atoms",
      "Hybrid: the actual electronic structure"
    ],
    "problems": [
      "v2-62",
      "v2-63",
      "v2-64",
      "v2-65"
    ],
    "examples": [
      "v2-62",
      "v2-63"
    ],
    "next": [
      "acids",
      "reactions",
      "substitution"
    ]
  },
  {
    "id": "conformations",
    "course": "Organic Chemistry I",
    "unit": "3 · Shape and stereochemistry",
    "title": "Conformations and intermolecular forces",
    "source": "original",
    "overview": "Bond rotation changes conformation without changing connectivity; intermolecular forces help explain physical properties.",
    "detail": "In a Newman view, look along a specific C–C bond and distinguish front from back. Eclipsed bonds have torsional strain. For butane, anti separates the methyl groups by 180°, while gauche places them 60° apart. Dispersion increases with polarizability and contact area; hydrogen bonding requires a suitable donor and acceptor. Trends require considering molecular size and shape as well as functional groups.",
    "equation": "Newman dihedral angles: eclipsed 0°; gauche 60°; anti 180°",
    "variables": "Dihedral angle: relative rotation between selected bonds around a viewing axis.",
    "assumptions": "Energy ordering quoted for ordinary butane; substituent-specific effects can change other conformational preferences. Boiling point is not determined by molecular mass alone.",
    "application": "Conformation and intermolecular attraction influence material properties and separations.",
    "prereqs": [
      "structure",
      "groups"
    ],
    "objectives": [
      "Interpret Newman projections",
      "Compare butane conformers",
      "Identify hydrogen-bond donors and acceptors"
    ],
    "mistakes": [
      "Confusing conformation with configuration",
      "Equating every polar bond with a hydrogen-bond donor",
      "Ignoring shape in boiling-point comparisons"
    ],
    "terms": [
      "Conformation: geometry changed by bond rotation",
      "Torsional strain: eclipsing penalty",
      "Polarizability: ease of distorting electron density"
    ],
    "problems": [
      "v2-71",
      "v2-72",
      "v2-73",
      "v2-74"
    ],
    "examples": [
      "v2-71",
      "v2-72"
    ],
    "next": [
      "stereo"
    ]
  },
  {
    "id": "stereo",
    "course": "Organic Chemistry I",
    "unit": "3 · Shape and stereochemistry",
    "title": "Chirality, E/Z and R/S",
    "source": "original",
    "overview": "Stereochemistry describes different spatial arrangements with the same connectivity.",
    "detail": "A tetrahedral center with four different substituents is a common source of chirality, but molecular symmetry must also be considered. Rank CIP priorities by atomic number and then the first point of difference. For R/S, place the lowest priority away and trace 1→2→3; invert if it points toward you. For E/Z, compare the higher-priority groups across each double-bond carbon. R/S does not predict optical-rotation sign.",
    "equation": "Lowest priority away: clockwise → R; counterclockwise → S. Higher priorities same side → Z; opposite → E. ee=|%major−%minor|",
    "variables": "ee: enantiomeric excess in percentage points; configurations are labels, not physical units.",
    "assumptions": "E/Z requires two different substituents on each double-bond carbon. 2ⁿ is an upper bound for n stereocenters; symmetry can reduce the count.",
    "application": "Enantiomers may interact differently with chiral catalysts or biological systems.",
    "prereqs": [
      "structure",
      "conformations"
    ],
    "objectives": [
      "Assign CIP priorities",
      "Distinguish enantiomers and diastereomers",
      "Check meso symmetry and ee"
    ],
    "mistakes": [
      "Using group size instead of CIP rules",
      "Forgetting inversion when 4 is toward you",
      "Equating R with positive optical rotation"
    ],
    "terms": [
      "Enantiomers: nonsuperimposable mirror images",
      "Diastereomers: stereoisomers not related as mirror images",
      "Meso: achiral despite stereocenters"
    ],
    "problems": [
      "q20",
      "q21",
      "q22",
      "q23",
      "q24",
      "q25",
      "v2-75",
      "v2-76",
      "v2-77",
      "v2-78"
    ],
    "examples": [
      "q20",
      "q21"
    ],
    "next": [
      "reactions",
      "substitution",
      "spectra"
    ]
  },
  {
    "id": "reactions",
    "course": "Organic Chemistry I",
    "unit": "4 · Reactivity",
    "title": "Reaction energy and alkene chemistry",
    "source": "original",
    "overview": "Distinguish whether a reaction is thermodynamically favored from how quickly it occurs.",
    "detail": "Reaction-coordinate maxima are transition states; local minima between them are intermediates. Compare each barrier to its preceding minimum. Catalysts lower kinetic barriers without changing the overall equilibrium. Alkene π bonds can donate electrons to electrophiles. Reagents determine regioselectivity, stereochemistry and whether carbocation rearrangement is plausible.",
    "equation": "ΔG°=−RT lnK; k=A exp(−Ea/RT); ΔG=ΔH−TΔS",
    "variables": "R=8.314 J·mol⁻¹·K⁻¹ (rounded gas constant); T in K; Ea and ΔG in compatible energy-per-mole units. A has the units of k.",
    "assumptions": "Arrhenius comparisons assume the same prefactor when stated. ΔG° relates to K; nonstandard ΔG also depends on reaction composition.",
    "application": "Kinetics, equilibrium and selective reactions are distinct constraints in reaction engineering.",
    "prereqs": [
      "acids",
      "resonance",
      "stereo"
    ],
    "objectives": [
      "Read reaction-energy diagrams",
      "Distinguish kinetics from equilibrium",
      "Predict simple alkene additions"
    ],
    "mistakes": [
      "Treating the highest absolute peak as the largest local barrier",
      "Using Celsius in an exponential",
      "Assuming a catalyst changes K"
    ],
    "terms": [
      "Activation barrier: energy from reactant state to transition state",
      "Intermediate: local energy minimum",
      "Regioselectivity: preference among connectivity outcomes"
    ],
    "problems": [
      "v2-79",
      "v2-80",
      "v2-81",
      "v2-82",
      "v2-83",
      "v2-84"
    ],
    "examples": [
      "v2-79",
      "v2-80"
    ],
    "next": [
      "alkynes"
    ]
  },
  {
    "id": "alkynes",
    "course": "Organic Chemistry I",
    "unit": "4 · Reactivity",
    "title": "Alkynes and reaction selection",
    "source": "alkynes",
    "overview": "A triple bond offers two π bonds and distinctive reduction and acidity chemistry.",
    "detail": "Catalytic hydrogenation can proceed to an alkane; controlled reduction can stop at an alkene. Lindlar conditions typically give syn addition and a cis alkene for suitable internal alkynes; dissolving-metal reduction gives the trans product. A terminal alkyne can be deprotonated by a sufficiently strong base, but an internal alkyne lacks that terminal hydrogen.",
    "equation": "C≡C = one σ bond + two π bonds; terminal acetylide formation requires favorable acid–base equilibrium",
    "variables": "Cis/trans descriptions apply when the resulting alkene supports them. Reagent and workup determine the endpoint.",
    "assumptions": "Simple isolated alkynes are assumed; other reducible groups may complicate selectivity. Supplied pKa values must use a compatible solvent scale.",
    "application": "Reagent selection controls the extent and stereochemistry of a transformation.",
    "prereqs": [
      "acids",
      "reactions"
    ],
    "objectives": [
      "Choose a partial reduction",
      "Distinguish terminal from internal alkynes",
      "Track carbon skeletons"
    ],
    "mistakes": [
      "Assuming every reduction stops at an alkene",
      "Deprotonating an internal alkyne at a nonexistent terminal H",
      "Ignoring workup conditions"
    ],
    "terms": [
      "Acetylide: conjugate base of a terminal alkyne",
      "Partial hydrogenation: reduction stopping at an alkene",
      "Syn: added groups approach the same face"
    ],
    "problems": [
      "v2-155",
      "v2-156",
      "v2-157",
      "v2-158"
    ],
    "examples": [
      "v2-155",
      "v2-156"
    ],
    "next": []
  },
  {
    "id": "substitution",
    "course": "Organic Chemistry I",
    "unit": "5 · Substitution and elimination",
    "title": "SN1, SN2, E1 and E2",
    "source": "substitution",
    "overview": "Competing mechanisms depend on substrate, reagent, solvent and temperature together.",
    "detail": "SN2 is a concerted backside displacement; SN1 involves ionization and a carbocation. E2 removes a β-hydrogen as a leaving group departs, favoring an anti-periplanar arrangement. E1 eliminates through a carbocation. Primary substrates and unhindered nucleophiles often favor SN2; tertiary substrates block ordinary SN2. Strong bulky bases often favor elimination.",
    "equation": "SN2: rate=k[RX][Nu]; SN1: rate=k[RX]; E2: rate=k[RX][base]",
    "variables": "RX: substrate; Nu: nucleophile. Rate-law units of k depend on overall order.",
    "assumptions": "These are idealized mechanism signatures. Avoid predicting a unique product from substrate alone when conditions are missing.",
    "application": "Mechanism choice explains rate and stereochemical outcomes.",
    "prereqs": [
      "acids",
      "resonance",
      "stereo"
    ],
    "objectives": [
      "Distinguish concerted and stepwise paths",
      "Use kinetic evidence",
      "Check β-hydrogen geometry"
    ],
    "mistakes": [
      "Assuming a strong base is always the best nucleophile",
      "Using SN2 at a tertiary carbon",
      "Ignoring reaction conditions"
    ],
    "terms": [
      "Backside attack: approach opposite the leaving group",
      "β-hydrogen: hydrogen adjacent to the leaving-group carbon",
      "Anti-periplanar: aligned in one plane on opposite sides"
    ],
    "problems": [
      "v2-151",
      "v2-152",
      "v2-153",
      "v2-154"
    ],
    "examples": [
      "v2-151",
      "v2-152"
    ],
    "next": []
  },
  {
    "id": "spectra",
    "course": "Organic Chemistry I",
    "unit": "6 · Structure evidence",
    "title": "IR and introductory NMR",
    "source": "spectra",
    "overview": "Spectra constrain a structure; a single signal rarely identifies a complete molecule.",
    "detail": "IR probes bond vibrations and helps recognize functional groups. Proton NMR distinguishes chemical environments; integration estimates relative proton counts, while simple first-order splitting reports neighboring equivalent protons. Symmetry can make apparently separate atoms equivalent. Exchangeable OH signals may not show the simple expected coupling.",
    "equation": "Simple first-order splitting: n equivalent neighboring protons → n+1 lines",
    "variables": "IR wavenumber in cm⁻¹; NMR chemical shift in ppm; integration is a relative area.",
    "assumptions": "The n+1 rule is a simplified first-order model, not a universal rule. Problem-specific spectral ranges are provided; no memorized peak database is required.",
    "application": "Combine formula, connectivity and multiple independent observations.",
    "prereqs": [
      "groups",
      "stereo"
    ],
    "objectives": [
      "Interpret supplied IR bands",
      "Count equivalent proton environments",
      "Use simple splitting and integration"
    ],
    "mistakes": [
      "Treating integration as an exact chemical shift",
      "Applying n+1 to every spectrum",
      "Identifying a whole molecule from one peak"
    ],
    "terms": [
      "Chemical shift: resonance position relative to a reference",
      "Integration: relative signal area",
      "Equivalent protons: nuclei sharing a chemical environment"
    ],
    "problems": [
      "v2-159",
      "v2-160",
      "v2-161",
      "v2-162"
    ],
    "examples": [
      "v2-159",
      "v2-160"
    ],
    "next": []
  }
];
const sources={
  "calc": {
    "title": "OpenStax Calculus Volume 1 + your requested topics",
    "url": "https://openstax.org/books/calculus-volume-1/pages/1-introduction",
    "note": "General Calculus I supplementation. No instructor syllabus was located, so topic sequence and exam coverage are not claimed."
  },
  "approx": {
    "title": "OpenStax Calculus • Linear approximation",
    "url": "https://openstax.org/books/calculus-volume-1/pages/4-2-linear-approximations-and-differentials",
    "note": "Online supplemental material; original practice, not an RPI exam forecast."
  },
  "integration": {
    "title": "OpenStax Calculus • Fundamental Theorem",
    "url": "https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus",
    "note": "Online supplemental material on accumulation and antiderivatives."
  },
  "applications": {
    "title": "OpenStax Calculus • Areas between curves",
    "url": "https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves",
    "note": "Online supplemental integral applications; the volume exercises also use elementary disk geometry."
  },
  "measurement": {
    "title": "OpenStax University Physics • Units and measurement",
    "url": "https://openstax.org/books/university-physics-volume-1/pages/1-introduction",
    "note": "Supplements measurement and significant-figure question types in the supplied Physics I Exam 1 papers."
  },
  "angular": {
    "title": "OpenStax University Physics • Angular momentum",
    "url": "https://openstax.org/books/university-physics-volume-1/pages/11-3-conservation-of-angular-momentum",
    "note": "General Physics I supplement beyond the located rotational-motion lectures."
  },
  "gravity": {
    "title": "OpenStax University Physics • Gravitation",
    "url": "https://openstax.org/books/university-physics-volume-1/pages/13-1-newtons-law-of-universal-gravitation",
    "note": "General Physics I supplement; not confirmed as current exam coverage."
  },
  "oscillation": {
    "title": "OpenStax University Physics • Simple harmonic motion",
    "url": "https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion",
    "note": "General Physics I supplement linking spring energy to periodic motion."
  },
  "fluids": {
    "title": "OpenStax University Physics • Bernoulli’s equation",
    "url": "https://openstax.org/books/university-physics-volume-1/pages/14-6-bernoullis-equation",
    "note": "General Physics I fluid-mechanics background; not a ChemE process-design module."
  },
  "waves": {
    "title": "OpenStax University Physics • Waves",
    "url": "https://openstax.org/books/university-physics-volume-1/pages/16-1-traveling-waves",
    "note": "General introductory wave concepts; no course-specific wave lecture was located."
  },
  "substitution": {
    "title": "OpenStax Organic Chemistry • Substitution and elimination",
    "url": "https://openstax.org/books/organic-chemistry/pages/11-summary",
    "note": "General Organic Chemistry I supplement. Exact placement in your course remains unverified."
  },
  "alkynes": {
    "title": "OpenStax Organic Chemistry • Alkyne reactions",
    "url": "https://openstax.org/books/organic-chemistry/pages/9-summary-of-reactions",
    "note": "Supplemental explanations; alkyne reagent choices also appear in the supplied older Organic Chemistry Exam II."
  },
  "spectra": {
    "title": "OpenStax Organic Chemistry • IR and NMR",
    "url": "https://openstax.org/books/organic-chemistry/pages/12-6-infrared-spectroscopy",
    "note": "General introductory spectroscopy supplement. NMR overview: https://openstax.org/books/organic-chemistry/pages/13-2-the-nature-of-nmr-absorptions. Spectral data in problems are supplied explicitly."
  },
  "original": {
    "title": "Original introductory practice",
    "note": "Authored educational examples on standard first-course topics. No private course documents or answer keys are distributed."
  }
};
const gaps=[{"course":"All courses","area":"Instructor alignment","status":"General practice","detail":"Standard first-course concepts; exact instructor exam boundaries are not verified. Some topics have four to six questions. Open-ended answers use self-assessment."}];
