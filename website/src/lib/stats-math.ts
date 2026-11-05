import { type Formula } from '@/components/Math'

export const statsMath = {
  aggression: [
    { id: 'built', label: 'Points built', tex: String.raw`\mathrm{built}=\mathrm{winners}+\text{service winners}+\mathrm{aces}+\text{forced errors drawn}` },
    { id: 'given', label: 'Points given away', tex: String.raw`\mathrm{given}=\text{unforced errors}+\text{double faults}+\text{invited forced errors}` },
    { id: 'margin', label: 'Aggressive margin', tex: String.raw`\mathrm{margin}=\mathrm{built}-\mathrm{given}` },
    { id: 'efficiency', label: 'Efficiency', tex: String.raw`\mathrm{efficiency}=\frac{\mathrm{built}}{\mathrm{given}}` },
    { id: 'classical-margin', label: 'Classical count', tex: String.raw`\mathrm{margin}_A-\mathrm{margin}_B=\mathrm{points}_A-\mathrm{points}_B`, note: 'This identity applies to the classical count, without landings.' },
  ],
  edgeMap: [
    { id: 'exchange-rate', label: 'The exchange’s win share', tex: String.raw`r=\frac{w}{n}`, note: String.raw`$n$ exchanges of one kind in the map’s window — a match on the report, the chosen matches on the Stats tab — and $w$ of them followed by the point won. Each cell has its own $r$. With no exchanges, the cell has no rate or index.` },
    { id: 'baseline', label: 'The baseline', tex: String.raw`b=\frac{\text{points won}}{\text{points played}}`, note: 'The player’s own rate over the same points. Each player has his own baseline; on a match report it is his rate in that match.' },
    { id: 'index', label: 'The index: the share of the room', tex: String.raw`\mathrm{index}=100\times\begin{cases}\dfrac{r-b}{1-b}&r\ge b\\[8pt]\dfrac{r-b}{b}&r<b\end{cases}\qquad(0<b<1)`, note: String.raw`Rounded half away from zero. At an endpoint baseline ($b=0$ or $b=1$), a cell at that same rate reads $0$. $0$ is the usual rate, $+100$ every one of those points won, $-100$ every one lost — the same scale for every player, whatever his rate. A $76\%$ share at a $52\%$ baseline reads $+50$: half the room above the usual.` },
    { id: 'mirror', label: 'The two ends of one exchange', tex: String.raw`r_B=1-r_A,\qquad b_B=1-b_A\quad\Longrightarrow\quad\mathrm{index}_B=-\,\mathrm{index}_A`, note: 'The opponent’s share of the same exchange is the complement of yours, and so is his baseline — the room above you is the room below him. Your 2nd serve × their BHR at −25 is their Return BHR × 2nd at +25.' },
    { id: 'rate-tone', label: 'RATE: the number, and its colour', tex: String.raw`\text{number}=r\qquad\mathrm{tone}=100\,(2r-1)`, note: String.raw`Under RATE the cell prints the share itself — the same scale for both players; the two ends of one exchange have complementary shares — and the colour is read against even: $50\%$ is $0$, every point won $+100$, every point lost $-100$ (the index with $b=\tfrac12$).` },
    { id: 'colour', label: 'One colour formula, every surface', tex: String.raw`\begin{aligned}\mathrm{hue}&=\operatorname{sign}(\mathrm{index})\\\mathrm{depth}&=\min\!\Bigl(1,\tfrac{\lvert\mathrm{index}\rvert}{50}\Bigr)\Bigl(0.35+0.65\,\min\!\bigl(1,\tfrac{n}{20}\bigr)\Bigr)\\n&<3\ \Longrightarrow\ \text{grey}\end{aligned}`, note: String.raw`Green for a positive index, red for a negative one. A cell saturates at $\pm50$ — half the room on its side; the evidence factor reaches full strength at twenty exchanges. With fewer than three exchanges the cell is grey, the number printed still.` },
  ],
  momentum: [
    { id: 'hold-deuce', label: 'Holding from deuce', tex: String.raw`P_D=\frac{p^2}{p^2+(1-p)^2}`, note: String.raw`$p$ is the server’s chance of winning a point; $P_D$ is the chance of holding from deuce.` },
    { id: 'hold-game', label: 'Holding from the start of a game', tex: String.raw`P(\mathrm{hold})=p^4\bigl[1+4(1-p)+10(1-p)^2\bigr]+20p^3(1-p)^3P_D` },
    { id: 'historical-rate', label: 'The historical serve-point rate', tex: String.raw`\begin{aligned}p_0&=\frac{\kappa\cdot0.62+S_{\mathrm{before}}}{\kappa+N_{\mathrm{before}}}\\\kappa&=40\end{aligned}`, note: String.raw`$S_{\mathrm{before}}$ and $N_{\mathrm{before}}$ are serve points won and played before this match.` },
    { id: 'live-rate', label: 'Updating the rate during the match', tex: String.raw`\begin{aligned}\widehat p_n&=\frac{\kappa p_0+S_n}{\kappa+N_n}\\w_{\mathrm{match}}&=\frac{N_n}{\kappa+N_n}\end{aligned}`, note: String.raw`$S_n$ and $N_n$ are serve points won and played in this match. The other player’s rate is updated the same way.` },
    { id: 'importance', label: 'A point’s importance', tex: String.raw`I_n=P(\mathrm{win}\mid\text{point won})-P(\mathrm{win}\mid\text{point lost})`, note: 'Both probabilities use the rates as they stood before the point.' },
    { id: 'point-move', label: 'The change after a point', tex: String.raw`\Delta P_n=(y_n-\pi_n)I_n+\Delta_{\mathrm{rates},n}`, note: String.raw`$y_n$ is 1 for a point won and 0 for a point lost; $\pi_n$ is the chance of winning it. The final term is the step from updating the two serve-point rates: large in the first games, small once the rates settle.` },
    { id: 'match-curve', label: 'The curve after each point', tex: String.raw`P_n=P(\text{win match}\mid\text{exact score},\widehat p_n,\widehat q_n)` },
    { id: 'rally-curve', label: 'A rally session: reaching the target first', tex: String.raw`\begin{aligned}P_R&=P(\text{target first}\mid\text{tally},\widehat r)\\\widehat r&=\frac{24\cdot\frac12+\text{rallies won}}{24+\text{rallies played}}\end{aligned}`, note: 'Blocks are trials to a majority.' },
    { id: 'aggression-form', label: 'Aggression form', tex: String.raw`\begin{aligned}F&=\operatorname{EWMean}(x_n)\\x_n&=\begin{cases}+1&\text{built}\\-1&\text{given}\end{cases}\\\mathrm{BOTH}&=F_A-F_B\end{aligned}`, note: 'The exponentially weighted mean remembers approximately the last twelve points.' },
  ],
  forecast: [
    { id: 'level', label: 'Level', tex: String.raw`\begin{aligned}\widehat y_{t+1\mid t}&=\ell_t\\\ell_t&=\ell_{t-1}+\alpha e_t\end{aligned}` },
    { id: 'trend', label: 'Trend', tex: String.raw`\begin{aligned}\widehat y_{t+1\mid t}&=\ell_t+b_t\\\ell_t&=\ell_{t-1}+b_{t-1}+\alpha e_t\\b_t&=b_{t-1}+\beta e_t\end{aligned}` },
    { id: 'damped-trend', label: 'Damped trend', tex: String.raw`\begin{aligned}\widehat y_{t+1\mid t}&=\ell_t+\phi b_t\\b_t&=\phi b_{t-1}+\beta e_t\\0.8&\le\phi\le0.98\end{aligned}` },
    { id: 'aicc', label: 'Choosing a model', tex: String.raw`\begin{aligned}\mathrm{AICc}&=-2\log L+2k+\frac{2k(k+1)}{n-k-1}\\k&\in\{3,5,6\}\end{aligned}` },
    { id: 'smoothing-shrinkage', label: 'Shrinking the smoothing weight', tex: String.raw`\begin{aligned}\alpha^*&=\frac{\kappa\alpha_{\mathrm{roster}}+n\widehat\alpha}{\kappa+n}\\\kappa&=8\end{aligned}` },
    { id: 'forecast-range', label: 'The forecast range', tex: String.raw`\begin{aligned}h&=t_{0.90}\sqrt{\max\bigl(\widehat\sigma^2,f\bigr)}\\\text{range}&:\pm h\\f_{\mathrm{rate}}&=\frac{p(1-p)}{\text{points}}\end{aligned}`, note: String.raw`$f$ is the applicable variance floor: the rate floor shown above, a count’s mean, 4 for a bare percentage or margin, or the roster’s residual spread while the history is short.` },
    { id: 'prematch-rate', label: 'The serve rate before a match', tex: String.raw`\begin{aligned}p&=\frac{\kappa\cdot0.62+N\widehat p}{\kappa+N}\\\kappa&=40\text{ serve points}\end{aligned}` },
    { id: 'win-chance', label: 'The match chance and its range', tex: String.raw`\begin{aligned}P(\mathrm{win})&=\sum_{\omega\in\mathcal W}P(\omega\mid\text{current score})\\\text{80\% range}&=\bigl[Q_{0.10}(P(\mathrm{win})),Q_{0.90}(P(\mathrm{win}))\bigr]\end{aligned}`, note: String.raw`$\mathcal W$ contains the winning continuations of the remaining games, tiebreaks and sets. The quantiles are taken over the two serve rates’ errors, propagated through the scoring model.` },
    { id: 'next-match', label: 'The next-match chance', tex: String.raw`\begin{aligned}P_{\mathrm{next}}&=\sum_o w_oP(\mathrm{win}\mid p,p_o)\\w_o&=\frac{\text{matches against }o}{\text{matches}}\end{aligned}` },
  ],
} satisfies Record<string, readonly Formula[]>

export const statsInlineMath = {
  p: String.raw`p`,
  q: String.raw`q`,
  kappa: String.raw`\kappa`,
  deuceHold: String.raw`\frac{p^2}{p^2+(1-p)^2}`,
  pExample: String.raw`p=0.6`,
  equalRatesExample: String.raw`p=q=0.6`,
  liveRate: String.raw`\widehat p=\frac{\kappa p_0+\text{serve points won}}{\kappa+\text{serve points played}}`,
  otherRate: String.raw`\widehat q`,
  matchWeight: String.raw`\frac{N}{\kappa+N}`,
  efficiency: String.raw`\mathrm{built}/\mathrm{given}`,
  decidedPoints: String.raw`\mathrm{built}+\mathrm{given}`,
  classicalMargins: String.raw`\mathrm{margin}_A-\mathrm{margin}_B=\mathrm{points}_A-\mathrm{points}_B`,
  usualRange: String.raw`t_{0.90}\,s\sqrt{1+\frac1n}`,
  spread: String.raw`s`,
  quantile: String.raw`t_{0.90}`,
} as const
