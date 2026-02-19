// ============================================
// PURPOSE: Type definitions for product matrix analysis
//

export interface ProductQuadrant{
    name: string;
    quantity: number;
    revenue: number;
    revenueShare: number;
    perfromanceScore: number;
}

export interface ProductMatrix{
    stars: ProductQuadrant[];
    cashCows: ProductQuadrant[];
    questionMarks: ProductQuadrant[];
    dogs: ProductQuadrant[];
    recommendations: Record<string, string>;
}