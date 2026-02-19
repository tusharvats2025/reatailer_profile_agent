// ===========================================================================
// Purpose: Type definitions for time-series analysis
// ===========================================================================

export interface MonthlyMetrix{
    month: string;
    revenue: number;
    transaction: number;
    units: number;
    avgOrderValue: number;
    growthRate: number;
}

export interface SeasonalPattern {
    pattern:
    | 'stable'
    | 'growing'
    | 'declining'
    | 'seasonal'
    | 'volatile'
    | 'insufficeint_data';
    confidence: number;
    description: string;
}


export interface TimeSeriesData {
    montlyRevenue: Record<string, number>;
    monthlyTransactions: Record<string, number>;
    monthlyUnits: Record<string, number>;
    monthlyGrowth: Record<string, number>;
    averageGrowthRate: number;
    monthlyMetrics: MonthlyMetrix[];
    seasonalPattern: SeasonalPattern;
    peakMonth: string;
    lowMonth: string;
    totalMonths: number;
}