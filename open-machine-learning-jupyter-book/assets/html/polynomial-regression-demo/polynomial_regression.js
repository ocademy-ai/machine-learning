let points = [];
let coeffs = [];
let polynomial_degree;

let point_radius;
let range, scale;
let curve_prec;

// states
let updated;
let fitted;

function update() {
    coeffs = [];

    let x_sums = [];
    for (let i = 0; i <= 2 * polynomial_degree; i++) {
        x_sums.push(0);
        for (let point of points) {
            x_sums[i] += Math.pow(point.x, i);
        }
    }

    let xy_sums = [];
    for (let i = 0; i <= polynomial_degree; i++) {
        xy_sums.push(0);
        for (let point of points) {
            xy_sums[i] += Math.pow(point.x, i) * point.y;
        }
    }

    let A = [];
    for (let row = 0; row < polynomial_degree + 1; row++) {
        new_row = [];
        for (let col = 0; col < polynomial_degree + 1; col++) {
            new_row.push(x_sums[row + col]);
        }
        A.push(new_row);
    }

    let B = [];
    for (let row = 0; row < polynomial_degree + 1; row++) {
        B.push(xy_sums[row]);
    }
    fitted = true;

    let A_inverse;
    try {
        A_inverse = math.inv(A);
    }
    catch (error) {
        console.log("Matrix not invertible");
        fitted = false;
    }

    if (fitted) {
        for (let i = 0; i < polynomial_degree + 1; i++) {
            let dot_product = 0;
            for (let j = 0; j < polynomial_degree + 1; j++) {
                dot_product += A_inverse[i][j] * B[j];
            }
            coeffs.push(dot_product);
        }
        c_display.innerHTML = "Polynomial coefficients: <br>";
        for(let i = 0; i <= polynomial_degree; i++) {
            c_display.innerHTML += `&theta;<sub>${i}</sub>: ${coeffs[i].toFixed(6)} <br>`;
        }
    }

    if(points.length < polynomial_degree + 1) {
        warn_display.style.display = "block";
    }
    else {
        warn_display.style.display = "none";
    }
}

function render() {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas_width, canvas_height);

    renderAxes();
    renderPoints();
    renderCurve();

    updated = true;
}

function updateParams(variable) {
    if(variable == "m") {
        polynomial_degree = Number.parseInt(m_input.value);
        m_display.innerHTML = `Degree of polynomial: ${polynomial_degree}`;
        updated = false;
    }
}

function initParams() {
    range = 10;

    m_input.value = 4;
    updateParams("m");

    if(!mobile) {
        point_radius = 8;
    }   
    else {
        point_radius = 6;
    }
    curve_prec = 100;
    updated = false;

    scale = range / canvas_width;
    for(let i = 0; i <= m_input.value; i++) {
        points.push({
            y: 0.9 * (Math.random() * range - range / 2),
            x: (i + 0.5 - Math.ceil(m_input.value / 2)) * 0.8 * range / m_input.value + (Math.random() * range / 10 - range / 5),
        });
    }
    console.log(points);
}

function f(x) {
    let num = 0;
    for (let i = 0; i <= polynomial_degree; i++) {
        num += coeffs[i] * Math.pow(x, i);
    }
    return num;
}

function renderAxes() {
    context.strokeStyle = "#ffffff";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(0, canvas_height / 2);
    context.lineTo(canvas_width, canvas_height / 2);
    context.stroke();

    context.beginPath();
    context.moveTo(canvas_width / 2, 0);
    context.lineTo(canvas_width / 2, canvas_height);
    context.stroke();
}

function renderPoints() {
    context.fillStyle = "#ff1818";
    for (let point of points) {
        context.beginPath();
        context.arc(canvas_width / 2 + point.x / scale, canvas_height / 2 - point.y / scale, point_radius, 0, 2 * Math.PI, false);
        context.fill();
    }
}

function renderCurve() {
    if (fitted) {
        let sample_points = [];
        let sample_points_spacing = range / curve_prec;

        let current_x = -range / 2;
        let num_points = 1;
        sample_points.push(current_x);

        while (num_points < curve_prec) {
            current_x += sample_points_spacing;
            sample_points.push(current_x);
            num_points++;
        }
        console.log(sample_points);

        let sample_values = [];
        for (let sample_point of sample_points) {
            sample_values.push(f(sample_point));
        }
        console.log(sample_values);

        context.strokeStyle = "#1f51ff";
        context.lineWidth = 2;
        context.beginPath();
        for(let i = 0; i < curve_prec; i++) {
            context.lineTo(canvas_width / 2 + sample_points[i] / scale, canvas_height / 2 - sample_values[i] / scale);
        }
        context.stroke();
    }
    else {
        c_display.innerHTML = "";
    }
}

function clearPoints() {
    points = [];
    updated = false;
    c_display.innerHTML = "";
}