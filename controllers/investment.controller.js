import Investment from "../models/investment.model.js";

// create new investment
export const createInvestment = async (req, res) => {
    const newInvestment = new Investment(req.body);

    try {
        const savedInvestment = await newInvestment.save();
        res
          .status(200)
          .json({
            success: true,
            message: "Investment created successfully",
            data: savedInvestment,
          });
      } catch (err) {
        res
          .status(500)
          .json({ success: false, message: "Investment Failed to be Created" });
      }
}