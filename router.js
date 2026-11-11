window.StudioRouter = (() => {
  const courses = {
    "calculus-1": "Calculus I",
    "physics-1": "Physics I",
    "organic-chemistry-1": "Organic Chemistry I",
  };
  const pages = [
    "home",
    "learn",
    "library",
    "builder",
    "mistakes",
    "bookmarks",
    "reference",
    "progress",
    "settings",
    "coverage",
    "search",
    "summary",
    "orbitarium",
    "assignments",
    "practice",
  ];
  const slug = (course) =>
    Object.keys(courses).find((k) => courses[k] === course);
  function encode(route) {
    const query = new URLSearchParams();
    if (route.id) query.set("topic", route.id);
    if (route.question) query.set("question", route.question);
    if (route.query) query.set("q", route.query);
    const mode =
      route.page === "hub"
        ? "learn"
        : route.page === "library"
          ? "practice"
          : route.page === "mistakes"
            ? "review"
            : route.mode || "learn";
    const path = route.course
      ? `/course/${route.course}/${mode}`
      : route.page === "home"
        ? "/"
        : `/${route.page}`;
    return "#" + path + (query.size ? "?" + query : "");
  }
  function decode(hash) {
    if (!hash || hash === "#") return null;
    if (!hash.startsWith("#/")) return null;
    const [path, search = ""] = hash.slice(1).split("?"),
      parts = path.split("/").filter(Boolean),
      q = new URLSearchParams(search);
    if (parts[0] === "course") {
      if (
        parts.length !== 3 ||
        !courses[parts[1]] ||
        !["learn", "practice", "review"].includes(parts[2])
      )
        return { page: "notfound" };
      const mode = parts[2],
        id = q.get("topic") || undefined,
        question = q.get("question") || undefined;
      return {
        page:
          mode === "learn"
            ? id
              ? "hub"
              : "learn"
            : mode === "review"
              ? "mistakes"
              : question
                ? "practice"
                : "library",
        course: parts[1],
        mode,
        id,
        question,
      };
    }
    const page = parts[0] || "home";
    return parts.length <= 1 && pages.includes(page)
      ? {
          page,
          query: q.get("q") || "",
          question: q.get("question") || undefined,
        }
      : { page: "notfound" };
  }
  return { encode, decode, courses, slug };
})();
