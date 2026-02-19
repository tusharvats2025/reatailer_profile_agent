// ==============================================================================
// PURPOSE: Type definitions for risk analysis
// ==============================================================================

export type RiskSeverity = 'low' | 'medium' | 'High';

export interface RiskFactor{
    type: 'reveue_concerntration' | 'brand_dependency' | 'category_diversification' | 'market_volatility';
    severity: number;
    score: number;
    description: string;
    recommendation: string;
}

export interface RiskAssessment {
    overallRiskScore: number;
    overallSeverity: RiskSeverity;
    risks: RiskFactor[];
    riskSummary: string;
}