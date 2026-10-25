// 查詢計畫
async function getPlan(id) {
    const response = await fetch(`${"plan"}/${id}`, {
        method: "GET"
    });

    if (response.status === 404)
        throw new Error("該編號查無計畫");
    else if (!response.ok)
        throw new Error("查詢計畫失敗");
    else
        return await response.json();
}

// 新增計畫
async function createPlan(plan) {
    const response = await fetch("plan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plan)
    });

    if (response.status === 404)
        throw new Error("該編號查無計畫");
    else if (!response.ok)
        throw new Error("新增計畫失敗");

    // 200: 請求接收成功，且已回傳請求資料。
    // 201: 請求接收成功，且已建立新資源。
    // 202: 請求接收成功，但尚未處理完。
    // 204: 請求接收成功，但是 No Content（沒有資料需要回傳）
    return response.status === 201
        ? await response.json()
        : null;
}

// 修改計畫
async function updatePlan(id, plan) {
    const response = await fetch(`${"plan"}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plan)
    });

    if (response.status === 404)
        throw new Error("該編號查無計畫");
    else if (!response.ok)
        throw new Error("修改計畫失敗");

    return response.status === 200
        ? await response.json()
        : null;
}

// 刪除計畫
async function deletePlan(id) {
    const response = await fetch(`${"plan"}/${id}`, {
        method: "DELETE"
    });

    if (response.status === 404)
        throw new Error("該編號查無計畫");
    else if (!response.ok)
        throw new Error("刪除計畫失敗");
}