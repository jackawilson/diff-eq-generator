// Small helper
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Each question object:
 * {
 *   title: string,
 *   question: string (HTML / MathJax),
 *   answer: string (HTML / MathJax)
 * }
 */

const banks = {
  firstOrderSystems: [
    {
      title: "Rewrite a 2nd-order ODE as a system",
      question: `
        Rewrite the ODE
        $$x'' + 4x - x^3 = 0$$
        as an equivalent first-order system
        $$\\mathbf{x}' = f(t, \\mathbf{x}).$$
        Clearly define your new variables.
      `,
      answer: `
        Let
        $$x_1 = x, \\quad x_2 = x'.$$
        Then
        $$x_1' = x_2,$$
        $$x_2' = -4x_1 + x_1^3.$$
        So the system is
        $$\\mathbf{x}' =
          \\begin{pmatrix}
            x_1' \\\\ x_2'
          \\end{pmatrix}
          =
          \\begin{pmatrix}
            x_2 \\\\ -4x_1 + x_1^3
          \\end{pmatrix}.
        $$
      `
    },
    {
      title: "Rewrite a 4th-order ODE as a system",
      question: `
        Rewrite the ODE
        $$x^{(4)} + 3x'' + x = e^t \\sin(2t)$$
        as a first-order system in variables $x_1, x_2, x_3, x_4$.
      `,
      answer: `
        Define
        $$x_1 = x, \\quad x_2 = x', \\quad x_3 = x'', \\quad x_4 = x'''.$$
        Then
        $$x_1' = x_2,$$
        $$x_2' = x_3,$$
        $$x_3' = x_4,$$
        $$x_4' = -3x_3 - x_1 + e^t \\sin(2t).$$
        So the system is
        $$\\mathbf{x}' =
          \\begin{pmatrix}
            x_2 \\\\ x_3 \\\\ x_4 \\\\ -3x_3 - x_1 + e^t \\sin(2t)
          \\end{pmatrix}.
        $$
      `
    },
    {
      title: "Coupled 2nd-order ODEs to first-order system",
      question: `
        Rewrite the system
        $$\\begin{cases}
          x'' - 5x + 4y = 0, \\\\
          y'' + 4x - 5y = 0
        \\end{cases}$$
        as a first-order system in variables $x_1, x_2, x_3, x_4$.
      `,
      answer: `
        Take
        $$x_1 = x, \\quad x_2 = x', \\quad x_3 = y, \\quad x_4 = y'.$$
        Then
        $$x_1' = x_2,$$
        $$x_2' = 5x_1 - 4x_3,$$
        $$x_3' = x_4,$$
        $$x_4' = -4x_1 + 5x_3.$$
        So
        $$\\mathbf{x}' =
          \\begin{pmatrix}
            x_2 \\\\ 5x_1 - 4x_3 \\\\ x_4 \\\\ -4x_1 + 5x_3
          \\end{pmatrix}.
        $$
      `
    }
  ],

  elimination: [
    {
      title: "Elimination for a 2×2 system",
      question: `
        Solve the system using the method of elimination:
        $$\\begin{cases}
          x' = y, \\\\
          y' = -9x + 6y.
        \\end{cases}$$
        (Find the general solution $x(t), y(t)$.)
      `,
      answer: `
        From $x' = y$, we have $y = x'$. Differentiate this:
        $$y' = x''.$$
        Substitute into the second equation:
        $$x'' = -9x + 6x'$$
        or
        $$x'' - 6x' + 9x = 0.$$
        Characteristic equation:
        $$r^2 - 6r + 9 = 0 \\Rightarrow (r - 3)^2 = 0,$$
        so $r = 3$ is a double root. Then
        $$x(t) = (C_1 + C_2 t)e^{3t}.$$
        Since $y = x'$, differentiate:
        $$x'(t) = C_2 e^{3t} + 3(C_1 + C_2 t)e^{3t}
            = \\big(3C_1 + C_2 + 3C_2 t\\big)e^{3t}.$$
        Therefore
        $$y(t) = \\big(3C_1 + C_2 + 3C_2 t\\big)e^{3t}.$$
      `
    },
    {
      title: "Elimination with forcing",
      question: `
        Solve the system by elimination:
        $$\\begin{cases}
          x' = 2x + y, \\\\
          y' = x + 2y - e^{2t}.
        \\end{cases}$$
      `,
      answer: `
        From the first equation,
        $$y = x' - 2x.$$
        Differentiate:
        $$y' = x'' - 2x'.$$
        Substitute into the second equation:
        $$x'' - 2x' = x + 2(x' - 2x) - e^{2t}.$$
        Simplify the right side:
        $$x'' - 2x' = x + 2x' - 4x - e^{2t}
          = 2x' - 3x - e^{2t}.$$
        Bring all terms to one side:
        $$x'' - 4x' + 3x = -e^{2t}.$$
        Solve the homogeneous part:
        $$r^2 - 4r + 3 = 0 \\Rightarrow (r-1)(r-3)=0,$$
        so $r = 1, 3$. Thus
        $$x_h(t) = C_1 e^t + C_2 e^{3t}.$$
        Try a particular solution of the form $x_p = Ae^{2t}$:
        $$x_p' = 2Ae^{2t}, \\quad x_p'' = 4Ae^{2t}.$$
        Substitute into
        $$x'' - 4x' + 3x = -e^{2t}:$$
        $$4Ae^{2t} - 4(2Ae^{2t}) + 3(Ae^{2t})
          = (4A - 8A + 3A)e^{2t} = (-A)e^{2t}.$$
        We want $-A e^{2t} = -e^{2t}$, so $A = 1$.
        Hence
        $$x(t) = C_1 e^t + C_2 e^{3t} + e^{2t}.$$
        Then
        $$y(t) = x' - 2x.$$
        Compute $x'$:
        $$x' = C_1 e^t + 3C_2 e^{3t} + 2e^{2t}.$$
        So
        $$y(t) = (C_1 e^t + 3C_2 e^{3t} + 2e^{2t})
                 - 2(C_1 e^t + C_2 e^{3t} + e^{2t})$$
        $$= -C_1 e^t + C_2 e^{3t}.$$
      `
    }
  ],

  matrixForm: [
    {
      title: "Matrix form of a 2×2 system",
      question: `
        Write the system
        $$\\begin{cases}
          x' = 3x - 2y, \\\\
          y' = 2x + y
        \\end{cases}$$
        in the form
        $$\\mathbf{x}' = P(t)\\,\\mathbf{x} + f(t).$$
        (Here $P$ will actually be constant.)
      `,
      answer: `
        Let
        $$\\mathbf{x} =
          \\begin{pmatrix}
            x \\\\ y
          \\end{pmatrix}.$$
        Then
        $$\\mathbf{x}' =
          \\begin{pmatrix}
            x' \\\\ y'
          \\end{pmatrix}
          =
          \\begin{pmatrix}
            3x - 2y \\\\ 2x + y
          \\end{pmatrix}
          =
          \\begin{pmatrix}
            3 & -2 \\\\ 2 & 1
          \\end{pmatrix}
          \\begin{pmatrix}
            x \\\\ y
          \\end{pmatrix}
          + \\begin{pmatrix}
            0 \\\\ 0
          \\end{pmatrix}.
        $$
        So
        $$P(t) =
          \\begin{pmatrix}
            3 & -2 \\\\ 2 & 1
          \\end{pmatrix}, \\quad
          f(t) =
          \\begin{pmatrix}
            0 \\\\ 0
          \\end{pmatrix}.
        $$
      `
    },
    {
      title: "Matrix form with time-dependent coefficients",
      question: `
        Write the system
        $$\\begin{cases}
          x' = tx - e^t y + \\cos t, \\\\
          y' = e^{-t} x + t^2 y - \\sin t
        \\end{cases}$$
        in matrix form $\\mathbf{x}' = P(t)\\mathbf{x} + f(t)$.
      `,
      answer: `
        Let
        $$\\mathbf{x} =
          \\begin{pmatrix}
            x \\\\ y
          \\end{pmatrix}.$$
        Then
        $$\\mathbf{x}' =
          \\begin{pmatrix}
            x' \\\\ y'
          \\end{pmatrix}
          =
          \\begin{pmatrix}
            tx - e^t y + \\cos t \\\\ e^{-t} x + t^2 y - \\sin t
          \\end{pmatrix}
          =
          \\begin{pmatrix}
            t & -e^t \\\\ e^{-t} & t^2
          \\end{pmatrix}
          \\begin{pmatrix}
            x \\\\ y
          \\end{pmatrix}
          +
          \\begin{pmatrix}
            \\cos t \\\\ -\\sin t
          \\end{pmatrix}.
        $$
        So
        $$P(t) =
          \\begin{pmatrix}
            t & -e^t \\\\ e^{-t} & t^2
          \\end{pmatrix}, \\quad
          f(t) =
          \\begin{pmatrix}
            \\cos t \\\\ -\\sin t
          \\end{pmatrix}.
        $$
      `
    }
  ],

  eigenvalueMethod: [
    {
      title: "Eigenvalue method for a 2×2 system",
      question: `
        Solve using the eigenvalue method:
        $$\\begin{cases}
          x_1' = 3x_1 + 4x_2, \\\\
          x_2' = 3x_1 + 2x_2,
        \\end{cases}
        \\quad x_1(0) = x_2(0) = 1.$$
      `,
      answer: `
        Write in matrix form:
        $$\\mathbf{x}' = A\\mathbf{x}, \\quad
        A =
        \\begin{pmatrix}
          3 & 4 \\\\ 3 & 2
        \\end{pmatrix}.$$
        Find eigenvalues:
        $$\\det(A - \\lambda I) =
        \\begin{vmatrix}
          3 - \\lambda & 4 \\\\ 3 & 2 - \\lambda
        \\end{vmatrix}
        = (3 - \\lambda)(2 - \\lambda) - 12
        = \\lambda^2 - 5\\lambda - 6.$$
        Solve
        $$\\lambda^2 - 5\\lambda - 6 = 0
          \\Rightarrow (\\lambda - 6)(\\lambda + 1) = 0,$$
        so $\\lambda_1 = 6$, $\\lambda_2 = -1$.
        <br/><br/>
        For $\\lambda_1 = 6$:
        $$A - 6I =
        \\begin{pmatrix}
          -3 & 4 \\\\ 3 & -4
        \\end{pmatrix}.$$
        Solve $(-3)v_1 + 4v_2 = 0 \\Rightarrow v_1 = \\tfrac{4}{3}v_2$.
        Take $v^{(1)} = (4,3)^T$.
        <br/><br/>
        For $\\lambda_2 = -1$:
        $$A + I =
        \\begin{pmatrix}
          4 & 4 \\\\ 3 & 3
        \\end{pmatrix}.$$
        Solve $4v_1 + 4v_2 = 0 \\Rightarrow v_1 = -v_2$.
        Take $v^{(2)} = (1,-1)^T$.
        <br/><br/>
        So general solution:
        $$\\mathbf{x}(t) = C_1 e^{6t}
          \\begin{pmatrix}
            4 \\\\ 3
          \\end{pmatrix}
          + C_2 e^{-t}
          \\begin{pmatrix}
            1 \\\\ -1
          \\end{pmatrix}.
        $$
        Use initial condition $\\mathbf{x}(0) = (1,1)^T$:
        $$\\begin{pmatrix}1\\\\1\\end{pmatrix}
          = C_1
          \\begin{pmatrix}4\\\\3\\end{pmatrix}
          + C_2
          \\begin{pmatrix}1\\\\-1\\end{pmatrix}.$$
        This gives
        $$4C_1 + C_2 = 1,$$
        $$3C_1 - C_2 = 1.$$
        Add the equations:
        $$7C_1 = 2 \\Rightarrow C_1 = \\tfrac{2}{7}.$$
        Then
        $$4\\cdot\\tfrac{2}{7} + C_2 = 1
          \\Rightarrow \\tfrac{8}{7} + C_2 = 1
          \\Rightarrow C_2 = -\\tfrac{1}{7}.$$
        Therefore
        $$\\mathbf{x}(t) =
          \\tfrac{2}{7} e^{6t}
          \\begin{pmatrix}4\\\\3\\end{pmatrix}
          - \\tfrac{1}{7} e^{-t}
          \\begin{pmatrix}1\\\\-1\\end{pmatrix}.$$
      `
    }
  ],

  matricesDet: [
    {
      title: "Matrix multiplication & powers",
      question: `
        Let
        $$A =
        \\begin{pmatrix}
          0 & 0 & 1 \\\\
          1 & 0 & 1 \\\\
          0 & 1 & 0
        \\end{pmatrix}, \\quad
        B =
        \\begin{pmatrix}
          2 & 1 & -1 \\\\
          0 & 2 & 1 \\\\
          1 & 1 & 0
        \\end{pmatrix}.$$
        Compute:
        $$\\text{(i)}\\ AB, \\quad
          \\text{(ii)}\\ BA, \\quad
          \\text{(iii)}\\ A^2.$$
      `,
      answer: `
        (i) Compute $AB$:
        $$AB =
        \\begin{pmatrix}
          0 & 0 & 1 \\\\
          1 & 0 & 1 \\\\
          0 & 1 & 0
        \\end{pmatrix}
        \\begin{pmatrix}
          2 & 1 & -1 \\\\
          0 & 2 & 1 \\\\
          1 & 1 & 0
        \\end{pmatrix}
        =
        \\begin{pmatrix}
          1 & 1 & 0 \\\\
          3 & 2 & -1 \\\\
          0 & 2 & 1
        \\end{pmatrix}.
        $$
        (ii) Compute $BA$:
        $$BA =
        \\begin{pmatrix}
          2 & 1 & -1 \\\\
          0 & 2 & 1 \\\\
          1 & 1 & 0
        \\end{pmatrix}
        \\begin{pmatrix}
          0 & 0 & 1 \\\\
          1 & 0 & 1 \\\\
          0 & 1 & 0
        \\end{pmatrix}
        =
        \\begin{pmatrix}
          1 & -1 & 1 \\\\
          2 & 1 & 2 \\\\
          1 & 0 & 2
        \\end{pmatrix}.
        $$
        (iii) Compute $A^2$:
        $$A^2 =
        \\begin{pmatrix}
          0 & 0 & 1 \\\\
          1 & 0 & 1 \\\\
          0 & 1 & 0
        \\end{pmatrix}
        \\begin{pmatrix}
          0 & 0 & 1 \\\\
          1 & 0 & 1 \\\\
          0 & 1 & 0
        \\end{pmatrix}
        =
        \\begin{pmatrix}
          0 & 1 & 0 \\\\
          0 & 1 & 1 \\\\
          1 & 0 & 1
        \\end{pmatrix}.
        $$
      `
    },
    {
      title: "Determinant practice",
      question: `
        Compute the determinant of
        $$A =
        \\begin{pmatrix}
          3 & 2 & -1 \\\\
          0 & 4 & 3 \\\\
          -5 & 2 & 7
        \\end{pmatrix}.$$
      `,
      answer: `
        Expand along the first row:
        $$\\det(A) =
          3
          \\begin{vmatrix}
            4 & 3 \\\\ 2 & 7
          \\end{vmatrix}
          - 2
          \\begin{vmatrix}
            0 & 3 \\\\ -5 & 7
          \\end{vmatrix}
          + (-1)
          \\begin{vmatrix}
            0 & 4 \\\\ -5 & 2
          \\end{vmatrix}.
        $$
        Compute each $2 \\times 2$ determinant:
        $$\\begin{vmatrix}
            4 & 3 \\\\ 2 & 7
          \\end{vmatrix}
          = 4\\cdot7 - 3\\cdot2 = 28 - 6 = 22,$$
        $$\\begin{vmatrix}
            0 & 3 \\\\ -5 & 7
          \\end{vmatrix}
          = 0\\cdot7 - 3(-5) = 15,$$
        $$\\begin{vmatrix}
            0 & 4 \\\\ -5 & 2
          \\end{vmatrix}
          = 0\\cdot2 - 4(-5) = 20.$$
        So
        $$\\det(A) = 3(22) - 2(15) - 1(20)
          = 66 - 30 - 20 = 16.$$
      `
    }
  ],

  mechanical: [
    {
      title: "Two-mass system in phase vs antiphase",
      question: `
        Two equal masses $m$ are connected to walls and to each other by three equal
        springs of stiffness $k$ (wall–mass–mass–wall). Let $x_1(t), x_2(t)$ be the
        displacements from equilibrium. The equations are
        $$m x_1'' + 2k x_1 - k x_2 = 0, \\quad
          m x_2'' - k x_1 + 2k x_2 = 0.$$
        <ol>
          <li>Show that if $x_1(0) = x_2(0)$ and $x_1'(0) = x_2'(0)$, then $x_1(t) = x_2(t)$ for all $t$ (in-phase motion).</li>
          <li>Find the angular frequency of this in-phase motion.</li>
        </ol>
      `,
      answer: `
        (1) Define $u = x_1 - x_2$. Subtract the second equation from the first:
        <br/>
        First equation:
        $$m x_1'' + 2k x_1 - k x_2 = 0.$$
        Second equation:
        $$m x_2'' - k x_1 + 2k x_2 = 0.$$
        Subtract:
        $$m(x_1'' - x_2'') + 2k x_1 - kx_2 + kx_1 - 2k x_2 = 0,$$
        $$m u'' + 3k(x_1 - x_2) = 0,$$
        so
        $$m u'' + 3k u = 0.$$
        The initial conditions $x_1(0) = x_2(0)$, $x_1'(0) = x_2'(0)$ give
        $$u(0) = 0, \\quad u'(0) = 0.$$
        The only solution of this second-order homogeneous ODE with zero initial
        data is $u(t) \\equiv 0$. Thus $x_1(t) = x_2(t)$ for all $t$.
        <br/><br/>
        (2) If $x_1 = x_2 = X$, plug into the first equation:
        $$m X'' + 2k X - k X = 0 \\Rightarrow m X'' + k X = 0.$$
        This is a simple harmonic oscillator with
        $$\\omega^2 = \\frac{k}{m}, \\quad \\omega = \\sqrt{\\frac{k}{m}}.$$
      `
    }
  ]
};

// --- Generator logic ---

function getQuestion(topic) {
  if (topic === "mixed") {
    const topics = [
      "firstOrderSystems",
      "elimination",
      "matrixForm",
      "eigenvalueMethod",
      "matricesDet",
      "mechanical"
    ];
    const chosenTopic = pickRandom(topics);
    return pickRandom(banks[chosenTopic]);
  }
  return pickRandom(banks[topic]);
}

function renderQuestion(q) {
  const titleEl = document.getElementById("question-title");
  const qEl = document.getElementById("question-text");
  const aEl = document.getElementById("answer-block");

  titleEl.textContent = q.title;
  qEl.innerHTML = q.question;
  aEl.innerHTML = q.answer;

  // Hide answer initially
  aEl.classList.add("hidden");
  const toggleBtn = document.getElementById("toggle-answer-btn");
  toggleBtn.textContent = "Show Answer";
  toggleBtn.disabled = false;

  // Re-render MathJax
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([qEl, aEl]);
  }
}

function toggleAnswer() {
  const aEl = document.getElementById("answer-block");
  const btn = document.getElementById("toggle-answer-btn");
  if (aEl.classList.contains("hidden")) {
    aEl.classList.remove("hidden");
    btn.textContent = "Hide Answer";
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([aEl]);
    }
  } else {
    aEl.classList.add("hidden");
    btn.textContent = "Show Answer";
  }
}

// Hook up events after DOM load
document.addEventListener("DOMContentLoaded", () => {
  const topicSelect = document.getElementById("topic-select");
  const newBtn = document.getElementById("new-question-btn");
  const toggleBtn = document.getElementById("toggle-answer-btn");

  newBtn.addEventListener("click", () => {
    const topic = topicSelect.value;
    const q = getQuestion(topic);
    renderQuestion(q);
  });

  toggleBtn.addEventListener("click", () => toggleAnswer());
});
