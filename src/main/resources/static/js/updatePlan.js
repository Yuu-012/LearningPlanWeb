// URLSearchParams() : 取得網址中的參數(去除?)
// window.location.search : 取得當前網頁的網址參數
const params = new URLSearchParams(window.location.search);
const planId = params.get("id");

const updateForm = document.getElementById("update-plan-form");
const nameInput = document.getElementById("plan-name");
const startInput = document.getElementById("plan-start");
const endInput = document.getElementById("plan-end");
const stateInput = document.getElementById("plan-state");

// 進入頁面後，取得指定計畫的資料
async function loadPlan() {
    if (!planId) {
        alert("網址中缺少計畫ID");
        window.location.href = "index.html";
        return;
    }

    try {
        const plan = await getPlan(planId);

        nameInput.value = plan.name;
        startInput.value = plan.start;
        endInput.value = plan.end;
        stateInput.value = (plan.state === 1) ? "是" : "否";

    } catch (error) {
        alert(error.message);
    }
}

// 確認修改
updateForm.addEventListener("submit", async event => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const start = startInput.value;
    const end = endInput.value;
    const stateString = stateInput.value;
    const state= (stateString === "是") ? 1 : 0;

    if (!name || !start || !end || !stateString){
        alert("資料未填寫完整");
        return;
    }

    const updatedPlan = {
        name: name,
        start: start,
        end: end,
        state: state
    };

    try {
        await updatePlan(planId, updatedPlan);
        alert("計畫修改成功！");
        window.location.href = "index.html";
    } catch (error) {
        alert(error.message);
    }
});

// 載入頁面時執行
loadPlan();
